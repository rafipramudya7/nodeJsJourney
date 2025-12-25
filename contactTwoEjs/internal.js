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

app.post(
  "/add-contact",
  [
    body("nama").isLength({ min: 5 }).withMessage("namanem cilikken cok"),
    body("nama").custom((value) => {
      if (loadContacts.cari(value)) {
        throw new Error("wes enek jenenge cok");
      } else {
        return true;
      }
    }),
    body("phone").isMobilePhone("id-ID").withMessage("phone tidak valid"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("add", {
        errors: errors.array(),
        oldData: req.body,
      });
    } else {
      const data = req.body;
      loadContacts.tambahData(data);
      req.flash("msg", "data sudah berhasil ditambahkan");
      res.redirect("index")
    }
  }
);
app.get("/contact/:page", (req, res) => {
  const sumber = req.params.page;
  const data = loadContacts.cari(sumber);
  res.render("detail", {
    nama: data.nama,
    phone: data.phone,
    email: data.email,
  });
});

app.get("/:page", (req, res, next) => {
  const sumber = req.params.page;
  if (sumber === "favicon.ico") return res.status(204).end();
  // console.log(loadContacts.load());
  res.render(
    sumber,
    { data: loadContacts.load(), msg: req.flash("msg") },
    (err, html) => {
      if (err) {
        // console.log("error addffnjing");
        return res.render("error");
      }
      res.send(html);
    }
  );
});
app.listen(3000, () => {
  console.log("server sedang berjalan");
});
