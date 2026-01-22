import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// cors error handling
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);


// accepting json data 
app.use(express.json({limit:"20kb"}))
// url data handling
app.use(express.urlencoded({extended:true, limit:"20kb"}))
// somitime we store files or folders
app.use(express.static("public"))

// cookie handle 
app.use(cookieParser())


// Routes import
import userRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/users", userRouter)
// http://localhost:8000/users/register

export { app };
