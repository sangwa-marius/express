import mongoose from 'mongoose';

const Student = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        trim: true,
    },
    grade: String,
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
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

