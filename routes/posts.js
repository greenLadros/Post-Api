//init
const express = require("express")
route = express.Router()
const Post = require("../models/Post")

//making routes

//GET SPECIFIC POST
route.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }catch(err){
        res.json({message: err})
    }
})

//GET ALL POSTS
// GET /posts/
route.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
})

//DELETE SPECIFIC POST
// DELETE /posts/:postId
route.delete('/:postId', async (req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.postId)
        res.json(post)
    }catch(err){
        res.json({message: err})
    }
})

//DELETE ALL POSTS
route.delete('/', async (req, res) => {
    try{
        const posts = Post //not finished
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
})

//SUBMIT A POST
route.post("/", (req, res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    
    post.save()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json({message: err})
    })
})

//UPDATE A POST
route.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}})
        res.json(updatedPost)
    }catch(err){
        res.json({message: err})
    }
})


//exporting
module.exports = route