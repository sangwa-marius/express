import express from 'express'
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
 */
router.get('/posts', (req, res) => {
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


export default router;