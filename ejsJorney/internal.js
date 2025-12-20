import ejs from 'ejs';
import express from 'express';


const app = express();
app.set('view engine','ejs');
app.get('/:page',(req,res)=>{
    const alur = req.params.page;
    res.render(alur,(err,html)=>{
        if(err)return res.render('error');
        return res.render(alur)
    });
})

app.listen(3000,()=>{
    console.log("server sedang berjalan...");
})