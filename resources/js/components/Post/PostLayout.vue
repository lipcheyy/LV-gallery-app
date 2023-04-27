<template>
    <div class="main-container" >
        <div class="img-container" v-for="post in posts">
            <template v-for="image in post.images">
                 <img class="img" :src="image.url">
            </template>

        </div>
        <p>{{post.title}}</p>
        <div class="buttons-container">
            <a href="" class="likes active"><img src="./Images/Like.png" alt="Like"></a>
            <a href="" class="save active"><img src="./Images/Save.png" alt="Save"></a>
        </div>

    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "PostLayout",
    props: ['Likes'],
    data(){
        return{
            posts:null
        }
    },
    mounted() {
        this.getPosts()
    },
    methods:{
        getPosts(){
            api.get('/api/auth/posts')
                .then(res=>{
                    this.posts=res.data.data
                    console.log(this.posts.title);
                })
        }
    }
}
</script>

<style scoped>
.main-container {
    height: 78vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img-container {
    width: 100%;
    height: 90%;
    margin-bottom: 7px;
}
.img-container > .img {
    width: 100%;
    height: 100%;
}

.buttons-container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}


</style>
