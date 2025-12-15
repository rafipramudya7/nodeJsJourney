import { resolve } from "dns";
import { stdin, stdout } from "process";
import rl from "readline";
import fs from "fs";
import validator from "validator";
import chalk from "chalk";

// cek file
if (!fs.existsSync("./data.json")) {
  fs.writeFileSync("./data.json", "[]", "utf-8");
}

const pertanyaan = rl.createInterface({
  input: stdin,
  output: stdout,
});

const ujian = (soal) => {
  return new Promise((resolve, reject) => {
    pertanyaan.question(soal, (jawaban) => {
      resolve(jawaban);
    });
  });
};

const store = (dataInput) => {
  //cek nama
  if (!validator.isEmail(dataInput.email)) {
    console.log(`${chalk.bgRed("salah goblok email mu")}`);
    process.exit(1);
  }

  //cek phone
  if (!validator.isMobilePhone(dataInput.phone, "id-ID")) {
    console.log(`${chalk.bgRed("phone number tidak valid blok")}`);
    return;
  }

  var dataUtama = fs.readFileSync("./data.json", "utf-8");
  dataUtama = JSON.parse(dataUtama);

  dataUtama.push(dataInput);
  dataUtama = JSON.stringify(dataUtama);
  fs.writeFileSync("./data.json", dataUtama);
};

const close = () => {
  pertanyaan.close();
};

export default {
  ujian,
  store,
  close,
};
