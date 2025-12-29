import expressEjsLayouts from "express-ejs-layouts";
import express from "express";
import morgan from "morgan";
import loadContacts from "./utils/contacts.js";
import { body, validationResult } from "express-validator";
import flash from "connect-flash";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

//third party midleware
app.set("view engine", "ejs");
app.set("layout", "layouts/mainLayout");
app.use(expressEjsLayouts);
app.use(morgan("dev"));
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
// builtin midleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
