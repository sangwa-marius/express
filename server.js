import express from 'express';
import path from 'path';
import url from 'url'
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/crops.html', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','crops.html'))
})

app.get('/contact.html', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','contact.html'))
})

app.get('/index.html', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})




app.listen(7000,()=>{
    console.log(`sever running on port 7000`)
})