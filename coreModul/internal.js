// menulis file menggunakan fs

const fs = require("fs");
const { stdin } = require("process");

//contoh syncronus
const isi = fs.readFileSync('example.txt','utf-8');
console.log(isi);

// contoh asyncornus

fs.readFile('example.txt','utf-8',(err,data) => {
    if(err) throw console.log(err);
console.log(data);
})

// contoh menggunakan cin dan cout

const cinn = require('readline');
const { json } = require("stream/consumers");
const rl = cinn.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("masukan nama: ",(nama) =>{

    rl.question("masukan umur: ", (umur) =>{

        const info = {nama,umur};
        const data = fs.readFileSync('data.json','utf-8');
        const datas = JSON.parse(data);
        datas.push(info);
        fs.writeFileSync('data.json',JSON.stringify(datas));
        console.log(`terimakasih`);

        rl.close();
    });
    console.log("bukti asyncronus 2 \n")
})
    console.log("bukti asyncronus 1 \n")
