<template>
<div class="main-container">
    <div class="posts">
        <img
            class="post"
            src="../Includes/Images/Post.png"
            alt="Post"
        >
        <img
            class="post"
            src="../Includes/Images/Post.png"
            alt="Post"
        >
        <img
            class="post"
            src="../Includes/Images/Post.png"
            alt="Post"
        >
        <img
            class="post"
            src="../Includes/Images/Post.png"
            alt="Post"
        >
        <img
            class="post"
            src="../Includes/Images/Post.png"
            alt="Post"
        >
    </div>
</div>
</template>

<script>
import PostLayout from "../Post/PostLayout";

export default {
    name: "UserPosts",
    components: {PostLayout},
    data() {
        return {
            posts: null,
            pagination: [],
            userLiked:null,
            likedIds:[],
            savedIds:[],
        }
    },
    mounted() {
        this.$Progress.start()
        setTimeout(()=>{
            this.$Progress.finish()
        },350)
    }
}
</script>

<style scoped>
.posts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}
</style>
