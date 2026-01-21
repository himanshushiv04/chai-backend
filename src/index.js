import dotenv from "dotenv";
import connectDB from "./db/db.js";
import {app} from "./app.js";
dotenv.config();

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERR: ", error);
      throw err;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB connection failed!", error);
  });

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR :", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listing on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
})();
*/
