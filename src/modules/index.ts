import express from "express";
import { urlRoutes } from "./url-shortner/routes/urlRoutes";

export const routes = express.Router();

routes.use(urlRoutes);
