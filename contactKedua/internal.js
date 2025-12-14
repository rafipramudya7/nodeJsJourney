const { resolve } = require('dns');
const { stdin, stdout } = require('process');
const rl = require('readline');
const fs = require('fs');

const pertanyaan = rl.createInterface({
    input:stdin,
    output:stdout

})

const ujian = (soal) => {
    return new Promise((resolve,reject) => {
        pertanyaan.question(soal,(jawaban) =>{
            resolve(jawaban);
        })

    })
}
// cek file
if(!fs.existsSync('./data.json')){
    fs.writeFileSync('./data.json','[]','utf-8');
}

const store = (dataInput) =>{
    var dataUtama = fs.readFileSync('./data.json','utf-8');
    dataUtama = JSON.parse(dataUtama);

    dataUtama.push(dataInput);
    dataUtama = JSON.stringify(dataUtama);
    fs.writeFileSync('./data.json',dataUtama);
}

const main = async()=>{
    const  nama = await ujian("siapa namamu : ");;
    const  email = await ujian("masukan email mu : ");
    const phone = await ujian("masukan nomor Hp mu :");
    const data = {nama,email,phone};
    store(data);
    console.log(data);
    pertanyaan.close();

}

main();