import express from 'express'
import Student from '../models/student.js';
import student from '../models/student.js';
const router = express.Router();

const posts = [
  {
    id: 1,
    title: "Introduction to Express"
  },
  {
    id: 2,
    title: "Understanding REST APIs"
  },
  {
    id: 3,
    title: "Using Swagger with Express"
  },
  {
    id: 4,
    title: "CRUD Operations in Node.js"
  },
  {
    id: 5,
    title: "Middleware in Express Explained"
  }
];


/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     description: Retrieve all posts or limit the number of returned posts using a query parameter
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit the number of posts returned
 *     responses:
 *       200:
 *         description: List of posts
 *       
 */
router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});


/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Post found
 *       404:
 *         description: Post not found
 */
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      message: `The post with id ${id} was not found`
    });
  }

  res.status(200).json(post);
});


router.post('/students',(req,res)=>{
  try {
    const newStudent = req.body;
    async function createNewStudent(){
    const student =  await Student.create(newStudent);
    console.log(student)
    res.status(201).json({student});
  }
  createNewStudent()
  
  } catch (error) {
    console.log(error.message)
    
  }
})

export default router;