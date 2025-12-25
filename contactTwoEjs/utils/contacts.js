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
  return hasil;
}
const tambahData = (data) =>{
  var isi = load();
  isi.push(data);
  isi = fs.writeFileSync('./data.json',JSON.stringify(isi));

}

export default { load, cari ,tambahData};




