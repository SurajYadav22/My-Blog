import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();
const app = express();

app.use("/", Router);

const port = 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const userName = process.env.DB_USER_NAME;
const password = process.env.DB_PASSWORD;

Connection(userName, password);
