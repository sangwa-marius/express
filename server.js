import express from 'express';
import posts from './routes/posts.js';
import mongoose from 'mongoose';
import Student  from './models/student.js';
const app = express();
const port = process.env.PORT || 7500;
mongoose.connect('mongodb://localhost:27017/express');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', posts);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
