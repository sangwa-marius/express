import express from 'express';
const router = express.Router();

const posts =[
    {id:1,names:"sangwa Marius"},
    {id:2, names:"ganza arsene"},
    {id:3, names:'Isheja Anne Marie'},
    {id:4, names:'Ugiriwabo Marien Louise'}

]


router.get ('/', (req,res)=>{
    const limit = parseInt(req.query.limit);
    
    if(!isNaN(limit) && limit > 0){
       return res.status(200).json(posts.slice(0,limit))
    }

    res.status(200).json(posts)
    
})

router.get ('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post)=>post.id ===id);
    if(!post){
       return res.status(404).json({message:`The post with id ${id} was not found`})
    }
    res.status(200).json(posts)

    
})

// create a new post

router.post('/',(req,res)=>{
    const newPost = {
        id:posts.length+1,
        title:req.body.title
    };

    if(!newPost.title){
        return res.status(400).json({message:'the title should be included'})
    }
    posts.push(newPost);
    res.status(201).json(newPost)
});

// update post

router.put('/:id',(req,res)=>{
    const id  = req.params.id;
    const post = posts.find((post)=>post.id ===id);
    if(!post){
        return res.status(404).json({message:`the post with id ${id}`});
    }
    post.title = req.body.title;
    res.status(200).json(post)
})
 
export default  router;
