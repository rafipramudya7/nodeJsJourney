import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8000;

app.use((req, res, next) => {
  if (!req.path.includes('.') && req.path !== '/') {
    req.url += '.html';
  }
  next();
});

app.use(express.static(path.join(__dirname, "expressWebServer")));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "expressWebServer", "error.html"));
});
