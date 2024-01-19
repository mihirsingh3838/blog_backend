const express= require('express');
const router= express.Router();


const {dummyRoute}= require("../controller/dummy");
const {createComment}= require("../controller/comments")
const {createPost, getAllPosts}= require("../controller/posts")
const {likePost, unlikePost}= require("../controller/likes")


router.get("/dummyRoute", dummyRoute);
router.post("/comments/create", createComment)
router.get("/posts", getAllPosts)
router.post("/posts/create", createPost)
router.post("/likes/like", likePost)
router.post("/likes/unlike", unlikePost)

module.exports= router;