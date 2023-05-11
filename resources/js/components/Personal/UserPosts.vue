<template>
    <div class="main-container">
        <div class="posts-container">
            <div class="post-container" v-for="post in posts">
                <template v-for="image in post.images">
                    <post-layout
                        :url="image.url"
                        :id="post.id"
                        :likesCount="post.likesCount"
                        :likedIds="likedIds"
                        :savedIds="savedIds"
                        :user="post.user"
                        :title="post.title"
                        :date="post.date">
                    </post-layout>
                </template>
            </div>
        </div>



    </div>
</template>

<script>
import PostLayout from '../Post/PostLayout'
import api from "../../api";

export default {
    name: "UserSaved",
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
        this.getPosts()
        this.getUserLikes()
        this.getUserSaves()
    },
    methods: {
        getPosts() {
            this.$Progress.start()
            api.get(`/api/auth/users/own`, )
                .then(res => {
                    console.log(132);
                    this.posts = res.data.data
                    this.$Progress.finish()
                })

        },
        getUserLikes() {
            api.get('/api/auth/posts/liked')
                .then(res => {
                    this.userLiked = res.data
                    // console.log(this.userLiked);
                    this.userLiked.forEach(liked=>{
                        this.likedIds.push(liked.id)
                    })

                })

        },
        getUserSaves(){
            api.get('/api/auth/posts/saved')
                .then(res=>{
                    res.data.forEach(saved=>{
                        this.savedIds.push(saved.id)
                    })
                })
        }

    }
}

</script>

<style scoped>
.main-container {
    margin-top: 25px;
}

.posts-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

.pagination-container {
    margin: 0 auto;
    width: 20%;
    display: flex;
    justify-content: space-between;
}

a {
    text-decoration: none;
    color: black;
}

li {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.13850415512465375vh solid #B00000;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    font-family: 'Times New Roman', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 4.43213296398892vh;
    line-height: 37px;

    cursor: pointer;

}

.active {
    color: white;
    background-color: #760c0c;
}

.active > a {
    color: white;
}

.closed {
    border: 2px solid #BBBBBB;
    color: #BBBBBB;
}

.control {
    font-size: 16px;
}

li:hover {
    transform: scale(1.1);
    animation: glowing 0.5s infinite;
}

@keyframes glowing {
    0% {
        border-radius: 50%;
        box-shadow: 0 0 3px #760c0c;
    }
    50% {
        border-radius: 50%;
        box-shadow: 0 0 10px #ab1111;
    }
    100% {
        border-radius: 50%;
        box-shadow: 0 0 3px #760c0c;
    }
}


@media only screen and (max-width: 1024px) {
    .pagination-container {
        width: 50%;
    }
}

@media only screen and (max-width: 543px) {
    .pagination-container {
        width: 60%;
    }
}
</style>
