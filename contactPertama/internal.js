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
  const jawaban = await pertanyaan("kamu sudah makan");
   console.log(jawaban);


}

main();



// input dan tulis


