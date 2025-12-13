const { promises } = require('dns');
const fs = require('fs');
const { stdin, stdout } = require('process');
const rl = require('readline');

//buat interface
const question = rl.createInterface({
    input:stdin,
    output:stdout
})


//cek ada atau tidak file

if(!fs.existsSync('./data.json')){
    fs.writeFileSync('./data.json','[]','utf-8');
}
 const pertanyaan = (soal) =>{
    return new Promise((resolve,reject) => {
        question.question(soal,(jawaban) => {
            resolve(jawaban);
        });
    });

 }


const main = async() =>{
  const nama = await pertanyaan("siapa namamu:");
  const umur = await pertanyaan("umur kamu:");
  const asal = await pertanyaan("domisili mana :");

 const input = {nama,umur,asal};
 var muatan = fs.readFileSync('./data.json','utf-8')
 muatan = JSON.parse(muatan);
 muatan.push(input);
 muatan = JSON.stringify(muatan);
 fs.writeFileSync('./data.json',muatan);
 question.close();
}

main();




// input dan tulis


