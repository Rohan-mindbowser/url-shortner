import express from "express";
import dotenv from "dotenv";
import { routes } from "./modules/index";
import { dbConnection } from "./config/dbConnection";

dotenv.config();
const app = express();

function startServer() {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  /** Routes */
  app.use("/api/v1", routes);

  /** Healthcheck */
  app.get("/test", (req, res, next) =>
    res.status(200).json({ hello: "world" })
  );

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port-->${process.env.PORT}`);
  });
}

dbConnection()
  .then(() => {
    console.log("Db connection success");
    startServer();
  })
  .catch((error) => {
    console.log(error);
  });
