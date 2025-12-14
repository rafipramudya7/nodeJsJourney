const { resolve } = require('dns');
const { stdin, stdout } = require('process');
const rl = require('readline');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { type } = require('os');
const { hideBin } = require('yargs/helpers');
const { coerce } = require('yargs');


const argv = yargs(hideBin(process.argv));
// cek file
if(!fs.existsSync('./data.json')){
    fs.writeFileSync('./data.json','[]','utf-8');
}

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


const store = (dataInput) =>{ 
    var dataUtama = fs.readFileSync('./data.json','utf-8');
    dataUtama = JSON.parse(dataUtama);

    dataUtama.push(dataInput);
    dataUtama = JSON.stringify(dataUtama);
    fs.writeFileSync('./data.json',dataUtama);
}

argv.command({
    command : 'tambah',
    describe : 'sebuah fungsi untuk memasukan data',
    builder : {
        nama :{
            type:'string',
            demandOption:true,
            coerce:(val)=>{
                if(!val || val.trim()===''){
                  throw new Error('nama tidak boleh kosonh cok');
                }
                return val;
            }
        },
        email : {
            type : 'string',
            demandOption:false
        },
        phone:{
            type:'string',
            demandOption:true,
             coerce:(val)=>{
                if(!val || val.trim()===''){
                  throw new Error('phone tidak boleh kosonh cok');
                }
                return val;
            }
        }
    },
    handler(argv){
        const isi = {
            nama : argv.nama,
            email : argv.email,
            phone: argv.phone
        }
        store(isi);
        pertanyaan.close();
    }
    
})

const main = async()=>{
    const  nama = await ujian("siapa namamu : ");;
    const  email = await ujian("masukan email mu : ");
    const phone = await ujian("masukan nomor Hp mu :");
    const data = {nama,email,phone};
    store(data);
    console.log(data);
    pertanyaan.close();

}

if (process.argv.length <= 2) {
    // tidak ada command → mode interaktif
    main();
} else {
    // ada command → yargs
    argv.help().parse();
}
