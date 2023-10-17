import mongoose, { Schema } from "mongoose";

const urlSchema: Schema = new Schema(
  {
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UrlSchema = mongoose.model("url", urlSchema);
