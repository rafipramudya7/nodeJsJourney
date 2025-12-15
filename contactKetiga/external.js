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

const load = () =>{
  var data = fs.readFileSync("./data.json","utf-8");
  data = JSON.parse(data);
  return data
}
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

  var dataUtama =load();
  dataUtama.push(dataInput);
  dataUtama = JSON.stringify(dataUtama);
  fs.writeFileSync("./data.json", dataUtama);
};


const cari = (nama) =>{
  var data = load();
  var hasil = data.filter((item) => {
    return item.nama.toLowerCase() === nama.toLowerCase();
  })
  if(hasil.length == 0){
    console.log(`${chalk.red(`data ${nama} tidak ditemukan`)}`)
  }
  hasil.forEach((element,index) => {
    console.log(`${index+1}. ${element.nama} ${element.email} ${element.phone}`);
  });
}

const filter = (nama) => {
  var data = load();
  var cek = data.find((item) =>{
    return item.nama.toLowerCase() === nama.toLowerCase();
  })
  if(!cek){
    console.log(`${chalk.red("data nya tidak ada cok")}`);
    return;
  }
  var hasil = data.filter((item) => {
    return item.nama.toLowerCase() !== nama.toLowerCase();
  })
  hasil = JSON.stringify(hasil);
  fs.writeFileSync('./data.json',hasil);
  console.log(`${chalk.green("data berhasil dihapus")}`)
}

const close = () => {
  pertanyaan.close();
};

export default {
  ujian,
  store,
  close,
  cari,
  load,
  filter
};
