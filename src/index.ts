import express, { NextFunction, Request } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

function startServer() {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // routes
  //   app.use("/api", routes);

  /** Healthcheck */
  app.get("/test", (req, res, next) =>
    res.status(200).json({ hello: "world" })
  );

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port-->${process.env.PORT}`);
  });
}

startServer();
