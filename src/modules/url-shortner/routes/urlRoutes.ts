import { Router } from "express";
import {
  assignShortUrlController,
  redirectUrlController,
} from "../controllers/urlControllers";

export const urlRoutes = Router();

urlRoutes.post("/short-url", assignShortUrlController);
urlRoutes.get("/get/:url", redirectUrlController);
