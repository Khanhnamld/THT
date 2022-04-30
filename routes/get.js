const express = require("express");
const router = express.Router();
const Post = require('../models/Posts')


router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.json({message: err});
    }
});

router.post('/', (req, res) => {
    const post = new Post({
        name: req.body.name,
        food: req.body.food
    });

    post.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.json({message: err})
        });
});

router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId});
        res.status(200).json(removePost);
    } catch(err){
        res.json({message: err}); 
    }
});

module.exports = router;