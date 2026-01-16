import express from 'express';
import path from 'path';
import url from 'url';

const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


// setUp static folder

app.use(express.static(path.join(__dirname ,'public')))

app.listen(7000,()=>{
    console.log(`sever running on port 7000`)
})