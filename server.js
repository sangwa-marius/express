import express from 'express';
import path from 'path';
import url from 'url'
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','home.html'))
})

app.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'))
})


app.listen(7000,()=>{
    console.log(`sever running on port 7000`)
})