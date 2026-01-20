import express from 'express';
import path from 'path';
import url from 'url';
import posts from './routes/posts.js'

const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 7500;

// setUp static folder
// app.use(express.static(path.join(__dirname ,'public')))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/posts', posts);


app.listen(port,()=>{
    console.log(`sever running on port ${port}`)
})