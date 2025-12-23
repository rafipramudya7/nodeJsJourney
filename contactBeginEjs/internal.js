import expressEjsLayouts from "express-ejs-layouts";
import express from "express";
import morgan from "morgan";

const app = express();

//third party midleware
app.set("view engine", "ejs");
app.set("layout", "layouts/mainLayout");
app.use(expressEjsLayouts);

app.use(morgan('dev'));

// builtin midleware
app.use(express.static('public'))
app.get("/:page", (req, res, next) => {
  const sumber = req.params.page;
  res.render(
    sumber,
    {
      nama: "nabila",
      umur: "12",
      tittle: "masuk dengan / page",
    },
    (err, html) => {
      if (err) {
        return next();
      }
      res.send(html);
    }
  );
});

app.use((req, res) => {
  res.render("error", {
    nama: "error",
    tittle: "error",
  });
});

app.listen(3000, () => {
  console.log("server sedang berjalan");
});
