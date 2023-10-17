import { NextFunction, Request, Response } from "express";
import { UrlSchema } from "../../../models/urlSchema";

export const assignShortUrlController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const doc = await UrlSchema.create({
      longUrl:
        "https://mongoosejs.com/docs/timestamps.html#:~:text=Mongoose%20schemas%20support%20a%20timestamps,this%20document%20was%20last%20updated",
      shortUrl: "https://www.google.com/",
    });
    await doc.save();

    res
      .status(200)
      .json({ message: "Record inserted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const redirectUrlController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.params);
    res.status(200).send({
      message: "Success..!!",
      success: true,
    });
  } catch (error) {}
};
