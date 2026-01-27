import express from 'express';
import posts from './routes/posts.js';
import mongoose from 'mongoose';
import Student  from './models/student.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const app = express();
const port = process.env.PORT || 7500;
mongoose.connect('mongodb://localhost:27017/express');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger)
app.use('/api', posts);
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
