import express from 'express';
const app = express();



app.get('/', (req,res)=>{
    res.send('Hello thsi is the home page')
})


app.listen(7000,()=>{
    console.log(`sever running on port 7000`)
})