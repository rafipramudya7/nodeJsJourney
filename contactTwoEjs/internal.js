import expressEjsLayouts from "express-ejs-layouts";
import express from "express";
import morgan from "morgan";
import loadContacts from "./utils/contacts.js";
const app = express();

//third party midleware
app.set("view engine", "ejs");
app.set("layout", "layouts/mainLayout");
app.use(expressEjsLayouts);

app.use(morgan("dev"));cd 

// builtin midleware
app.use(express.static("public"));
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
  console.log(loadContacts.load());
  res.render(sumber, { data: loadContacts.load() },
    (err, html) => {
      if (err) {
        console.log("error addffnjing");
        return res.render("error");
      }
      res.send(html);
    });
});
app.listen(3000, () => {
  console.log("server sedang berjalan");
});
