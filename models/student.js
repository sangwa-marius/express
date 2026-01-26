import mongoose from 'mongoose';

const Student = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    grade: String,
    email: String,
    hobbies: [String]    
})


export default mongoose.model('Student', Student);

