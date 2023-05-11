<template>
    <div class="main-container" v-if="post && post.images">
        <template >
            <template v-for="image in post.images">
                <img class="post" :src="image.url" alt="Post">
            </template>
        </template>
        <div class="commentaries-container">
            <div class="post-user-info">
                <div class="user-info">
                    <img class="user" src="../Includes/Images/User.png" alt="User">
                    <h2 class="username">{{ post.user.name }}</h2>
                </div>


                <div class="post-interaction">
                    <i class="far fa-heart likeBtn"></i>
                    <i class="far fa-bookmark"></i>
                </div>
            </div>
            <div class="line"></div>
            <div class="commentaries" >
                <div class="comment" v-for="comment in post.comments">
                    <div><img class="comment-user" src="../Includes/Images/User.png" alt="User">{{ comment.writer.name }}</div>
                    <i class="comment-title">{{comment.content}}</i>
                    <p @click.prevent="destroy(comment.id)">delete</p>
                </div>


            </div>
            <div class="send-container">
                <input type="text" class="send-comment" placeholder="Enter the message" v-model="content">
                <button type="submit" class="send-btn" @click.prevent="storeComment">
                    <i class="fa-sharp fa-solid fa-paper-plane"></i>
                </button>
            </div>


        </div>
    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "ShowPost",
    data() {
        return {
            post: null,
            content:''
        }
    },
    mounted() {
        this.getPost()
    },
    methods: {
        getPost() {
            api.get(`/api/auth/posts/${this.$route.params.id}`)
                .then(res => {
                    this.post = res.data.data
                })
        },
        storeComment(){
            api.post(`/api/auth/posts/${this.$route.params.id}/comments`,{
                content:this.content,
                post_id:this.$route.params.id
            })
                .then(()=>{
                    this.getPost()
                    this.content=''
                })
        },
        destroy(id){
            api.delete(`/api/auth/posts/${this.$route.params.id}/comments/${id}`)
                .then(()=>{
                    this.getPost()
                })
        }
    }
}
</script>

<style scoped>
h1, h2, p, i {
    margin: 0;
}

.main-container {
    width: 70%;
    margin: 0 auto;
    border: 1px solid black;
    padding: 15px;
    display: flex;
}

.commentaries-container {
    margin-left: 3%;
    width: 52%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.post {
    width: 45%;
}

.post-user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.line {
    width: 100%;
    height: 3px;
    background-color: #D9D9D9;
    border-radius: 10%;
    margin-top: 5px;
}

.user {
    width: 10%;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 10px;
}

.commentaries {
    padding: 10px;
    margin-top: 10px;
    height: 75%;
    overflow: auto;
}

.comment {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    margin: 5px 0;
}

.comment-user {
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;

}

.user-info {
    display: flex;
    width: 70%;
}

.send-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 10%;
    justify-content: space-between;
}

.send-comment {
    width: 75%;
    height: 100%;
    border: 1px solid grey;
    font-size: 32px;
    border-radius: 10px;

}

.send-btn {
    width: 20%;
    height: 100%;
    font-size: 24px;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 0;
}

.fa-paper-plane {
    margin: 0 auto;
}

.post-interaction {
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    font-size: 32px;
    justify-content: space-between;

}
</style>
