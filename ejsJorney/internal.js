import express from "express";
import layout from "express-ejs-layouts";
const app = express();
app.set("view engine", "ejs");
app.set("layout", "layouts/mainLayout");
app.use(layout);
app.get("/:page", (req, res) => {
  const alur = req.params.page;
  console.log(alur);
  const mahasiswa = [
    {
      nama: "aziz",
      umur: "12",
    },
    {
      nama: "umar",
      umur: "13",
    },
    {
      nama: "rumek",
      umur: "18",
    },
  ];
  res.render(
    alur,
    {
      nama: "sano",
      tittle: "ujiCoba",
      mahasiswa,
    },
    (err, html) => {
      if (err) {
        console.log("error");
        return res.render("error",{tittle:'cok'});
      }
      res.send(html);
    }
  );
});

app.listen(3000, () => {
  console.log("server sedang berjalan...");
});
