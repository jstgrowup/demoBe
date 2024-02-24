import express, { Application, Request, Response } from "express";
import { app } from "./app";
import dotenv from "dotenv";
const port = process.env.PORT || 3000;

dotenv.config({
  path: "./env",
});

app.listen(port, () => {
  console.log("connected successfully");
});
