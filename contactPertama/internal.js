
const req = require('./external.js');

const main = async() =>{
  const nama = await req.pertanyaan("siapa namamu:");
  const umur = await req.pertanyaan("umur kamu:");
  const asal = await req.pertanyaan("domisili mana :");
  const input = {nama,umur,asal};
  req.store(input);
  req.closes();

}
main();