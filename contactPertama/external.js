const fs = require('fs');
const rl = require('readline');
const { stdin, stdout } = require('process');

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

const store = (data)=>{
    var muatan = fs.readFileSync('./data.json','utf-8')
    muatan = JSON.parse(muatan);
    muatan.push(data);
    muatan = JSON.stringify(muatan);
    fs.writeFileSync('./data.json',muatan);
}

const closes = () =>{
    question.close();
}
module.exports = {store,pertanyaan,closes};





