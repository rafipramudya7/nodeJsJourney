const req = require('chalk');
const check = require('validator');
var prompt = require('readline-sync');

var nomor = prompt.question('masukan nomor hp :');
var cek = check.isMobilePhone(nomor,'id-ID');

const pesan = `${chalk.bgBlack.red("hasil")} dari pemeriksaan menyatakan nomor ${chalk.bgBlack.white(nomor)} adalah ${chalk.blue(cek)}`;
console.log(pesan);