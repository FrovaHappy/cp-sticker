import express from "express";
import morgan from "morgan";
import path from "path";

// Initializations
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use (morgan("dev"));

// routes

// static files
app.use(express.static(path.join(__dirname, "public")));


export default app;