import ejs from "ejs";
import express from "express";

const app = express();
app.set("view engine", "ejs");
app.get("/:page", (req, res) => {
  const alur = req.params.page;
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
      mahasiswa
    },
    (err, html) => {
      if (err) {
        console.log("error");
        return res.render("error");
      }
      res.send(html);
    }
  );
});

app.listen(3000, () => {
  console.log("server sedang berjalan...");
});
