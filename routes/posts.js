import express from 'express'
import Student from '../models/student.js';
import  { getAllStudents, getStudentByFirstName, addStudent, deleteStudent }from '../controllers/studentsController.js'
const router = express.Router();

router.get('/students',getAllStudents );
router.get('/students/:firstName',getStudentByFirstName);
router.post('/students',addStudent )
router.delete('/students/:firstName',deleteStudent)
     
export default router;