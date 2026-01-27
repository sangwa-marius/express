import mongoose from 'mongoose';

const Student = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: {
        type: Number,
        required: true,
        min: 0
    },
    grade: String,
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    hobbies: {
        type: [String],
        default: 'Learning express.js'
    },

    createdAt:{
        type:Date,
        default:()=>Date.now(),
        immutable:true
    },

    updatedAt:{
        type:Date,
        default:()=>Date.now()
    }
})


export default mongoose.model('Student', Student);

