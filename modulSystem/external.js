function keluaran(nama, umur) {
    return `halo namaku ${nama} dan umur saya ${umur}`;
}

const pi = "pik";
const mahasiswa = {
    nama : "anonymus",
    umur : 5,
    cetak() {
        return `halo ${this.nama} dan umur saya ${this.umur}`;
    }
}
class Orang{
    constructor(){
        console.log("oke berhasil selamat");
    }
}
module.exports = { keluaran, pi,mahasiswa,Orang};
