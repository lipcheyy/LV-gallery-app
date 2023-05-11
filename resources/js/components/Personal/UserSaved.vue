<template>
    <div class="main-container">
        <div class="posts">
            <img
                class="post"
                src="../Includes/Images/Post.png"
                alt="Post"
            >
        </div>
    </div>
</template>

<script>
import api from "../../api"
export default {
    name: "UserSaved",
    mounted() {
        this.$Progress.start()
        setTimeout(()=>{
            this.$Progress.finish()
        },350)
        this.getSavedPosts()
    },
    methods:{
        getSavedPosts(){

        }
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

img {
    height: 600px;
}
</style>
