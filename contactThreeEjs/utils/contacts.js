import fs from "fs";

if (!fs.existsSync("./data.json")) {
  fs.writeFileSync("./data.json", "[]", "utf-8");
}

const load = () => {
  var data = fs.readFileSync("./data.json", "utf-8");
  data = JSON.parse(data);
  return data;
};

const cari = (nama) => {
  var data = load();
  var hasil = data.find((item) => {
    return item.nama.toLowerCase() === nama.toLowerCase();
  });
  return hasil;
};
const tambahData = (data) => {
  var isi = load();
  isi.push(data);
  isi = fs.writeFileSync("./data.json", JSON.stringify(isi));
};

const hapus = (data) => {
  var isi = load();
  var hasil;
  if (!cari(data)) {
    console.log("data yang akan dihapus tidak ada");
  } else {
    hasil = isi.filter((item) => {
      return item.nama.toLowerCase() !== data.toLowerCase();
    });
    fs.writeFileSync("./data.json", JSON.stringify(hasil));
  }
};
const edit = (data) => {
  hapus(data.hiddenNama);
  tambahData(data);
};
export default { load, cari, tambahData, hapus, edit };
