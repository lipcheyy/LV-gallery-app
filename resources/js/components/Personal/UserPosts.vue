<template>
<div>
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
export default {
    name: "UserPosts",
    mounted() {
        this.$Progress.start()
        setTimeout(()=>{
            this.$Progress.finish()
        },350)
    }
}
</script>

<style scoped>

</style>
