import Student from "../models/student.js";
import colors from 'colors';

const getAllStudents = async(req, res) => {
  const allStudents = await Student.find();
  res.status(200).json(allStudents)
  }

const getStudentByFirstName = async(req, res) => {
  try {
    const firstName = req.params.firstName;
    
    const student = await Student.findOne({ firstName });
  
    if (!student) {
      console.log(`Student not found: ${firstName}`.yellow);
      return res.status(404).json({
        message: `The student with first name ${firstName} was not found`
      });
    }
    
    console.log(`Student found: ${firstName}`.green);
    res.status(200).json(student);
    
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
}


const addStudent =  async (req,res,next)=>{
  try {
    const newStudent = req.body;
    const [email,firstName,lastName,age,] = [newStudent.email,newStudent.firstName,newStudent.lastName,newStudent.age];
    if(!email||!firstName||!lastName||!age){
      const error = new Error('Email, firstName, lastName, and age are required');
      error.status = 400;
      return next(error);
      
    }
    const existingStudent = await Student.findOne({email:email});
    if(existingStudent){
      const error = new Error('Student with this email already exists');
      error.status = 400;
      return next(error);
    }
    const student =  await Student.create(newStudent);
    console.log(student)
    res.status(201).json({student});
  
  } catch (error) {
    console.log(error.message.email)
    
  }
}

const deleteStudent =  async (req,res)=>{
      const students = await Student.find();
      const firstName = req.params.firstName;
      const student = students.find(s=>s.firstName===firstName);
      if(!student){
        const error = new Error(`Student with first name ${firstName} not found`);
        error.status = 404;
        return next(error);
      }
      await Student.deleteOne({firstName:firstName});
      res.status(200).json({message:`Student with first name ${firstName} deleted successfully`});
    
    
    }

    export  {getAllStudents, getStudentByFirstName, addStudent, deleteStudent}