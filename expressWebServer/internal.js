import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/:page',(req,res)=>{
  const alur = path.join(__dirname,`${req.params.page}.html`);
  res.sendFile(alur,(err)=>{
    if(err) return res.status(404).sendFile(path.join(__dirname,'error.html'));
  })
})

app.listen(3000,()=>{
  console.log("server sedang berjalan...");
})