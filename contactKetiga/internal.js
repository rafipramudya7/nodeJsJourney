import { type } from "os";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import req from "./external.js";
import chalk from "chalk";

const argv = yargs(hideBin(process.argv));

argv.command({
  command: "tambah",
  describe: `${chalk.bgGreen("sebuah fungsi")}${chalk.bgRgb(
    0,
    255,
    217
  )("untuk memasukan data")}`,
  builder: {
    nama: {
      type: "string",
      demandOption: true,
      coerce: (val) => {
        if (!val || val.trim() === "") {
          console.log(`${chalk.bgRed("nama tidak boleh kosonh cok")}`);
          return;
        }
        return val;
      },
    },
    email: {
      type: "string",
      demandOption: false,
    },
    phone: {
      type: "string",
      demandOption: true,
      coerce: (val) => {
        if (!val || val.trim() === "") {
          throw new Error("phone tidak boleh kosonh cok");
        }
        return val;
      },
    },
  },
  handler(argv) {
    const isi = {
      nama: argv.nama,
      email: argv.email,
      phone: argv.phone,
    };
    req.store(isi);
    req.close();
  },
});

argv.command({
  command: "cari",
  describe: "fungsi untuk mencari orang",
  builder: {
    nama: {
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    const isi = argv.nama;
    req.cari(isi);
    req.close();
  },
});

argv.command({
  command: "tampilkan",
  describe: "sebuah fungsi menampilkan data",
  handler(argv) {
      const isi = req.load();
      isi.forEach((element, index) => {
        console.log(
          `${index + 1}. ${element.nama} ${element.email} ${element.phone}`
        );
      });
      req.close();
    },
});

argv.command({
  command:"hapus",
  describe:"fungsi untuk menghapus satu row data",
  builder:{
    nama:{
      type: "string",
      demandOption:true
    }
  },
  handler(argv){
    const isi = argv.nama;
    req.filter(isi);
    req.close();
  }
})

argv
  .demandCommand(1, chalk.red('Kamu harus memasukkan perintah yang valid!'))
  .strict()
  .help()
  .parse();