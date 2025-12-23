import fs from 'fs';

if(!fs.existsSync('./data.json')){
    fs.writeFileSync('./data.json','[]','utf-8');
}




const load = () =>{
  var data = fs.readFileSync("./data.json","utf-8");
  data = JSON.parse(data);
  return data
}

const cari = (nama) =>{
  var data = load();
  var hasil = data.find((item) => {
    return item.nama.toLowerCase() === nama.toLowerCase();
  })
  if(hasil.length == 0){
    console.log(`${chalk.red(`data ${nama} tidak ditemukan`)}`)
  }else{
    return(hasil);
    console.log(`${1}. ${hasil.nama} ${hasil.email} ${hasil.phone}`);
  }
}


export default { load, cari };




