<template>
    <div class="main-container" v-if="post && post.images">
        <template>
            <template v-for="image in post.images">
                <img class="post" :src="image.url" alt="Post">
            </template>
        </template>
        <div class="commentaries-container">
            <div class="post-user-info">
                <div class="user-info">
                    <img class="user" src="../Includes/Images/User.png" alt="User">
                    <h2 class="username">{{ post.user.name }}</h2>
                    <div>title {{ post.title }}</div>
                </div>

                like cnt<span class="likesCount">{{ post.likesCount }}</span>
                <div class="post-interaction">
                    <span @click.prevent="like">
                        <i class="far fa-heart" :class="{'fas fa-heart':likedIds.includes(id)}"></i>
                    </span>
                    <i @click.prevent="save" class="far fa-bookmark" :class="{'fas fa-bookmark':savedIds.includes(id)}"></i>
                </div>
            </div>
            <span v-if="post.user.id===user_id">
            <router-link :to="{name:'post.edit',params:{id:id}}" class="btn btn-success">
                <i class="fas fa-pencil"></i>
            </router-link>
            <a href="#" class="btn btn-danger" @click.prevent="destroyPost(id)"><i class="fas fa-trash"></i></a>
        </span>
            <div class="line"></div>
            <div class="commentaries">
                <div class="comment" v-for="comment in post.comments">
                    <div><img class="comment-user" src="../Includes/Images/User.png" alt="User">{{
                            comment.writer.name
                        }}
                    </div>
                    <span :class="commentToEdit(comment.id)?'d-none':''">
                        <i class="comment-title">{{ comment.content }}</i>
                    </span>
                    <template v-if="comment.writer.id===user_id">
                        <div @click.prevent="destroy(comment.id)">
                            <i class="fas fa-trash"></i>
                        </div>
                        <div @click.prevent="getCommentDataToEdit(comment.id,comment.content)">
                            <i class="fas fa-pencil"></i>
                        </div>
                    </template>
                    <span :class="commentToEdit(comment.id)?'':'d-none'">
                        <input v-model="contentToEdit">
                        <a href="" @click.prevent="update(comment.id)">upd</a>
                    </span>
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
            content: '',
            user_id: parseInt(localStorage.getItem('id')),
            toEdit: null,
            contentToEdit: '',
            id: parseInt(this.$route.params.id),
            likedIds: [],
            savedIds:[]
        }
    },
    mounted() {
        this.getPost()
        this.getUserLikes()
        this.getUserSaves()
    },
    methods: {
        getPost() {
            if (this.$route.params.id) {
                api.get(`/api/auth/posts/${this.id}`)
                    .then(res => {
                        this.post = res.data.data
                    })
            }
        },
        storeComment() {
            api.post(`/api/auth/posts/${this.id}/comments`, {
                content: this.content,
                post_id: this.$route.params.id
            })
                .then(() => {
                    this.getPost()
                    this.content = ''
                })
        },
        destroy(id) {
            api.delete(`/api/auth/posts/${this.id}/comments/${id}`)
                .then(() => {
                    this.getPost()
                })
        },
        commentToEdit(id) {
            return this.toEdit === id
        },
        getCommentDataToEdit(id, content) {
            this.toEdit = id
            this.contentToEdit = content
        },
        destroyPost(id){
            api.delete(`/api/auth/posts/${id}`)
                .then(()=>{
                    this.$router.push({name:'post.index'})
                })
        },
        update(id) {
            this.toEdit = null
            api.patch(`/api/auth/posts/${this.id}/comments/${id}`,
                {
                    content: this.contentToEdit
                })
                .then(res => {
                    this.getPost()
                })
        },
        getUserLikes() {
            api.get('/api/auth/posts/liked')
                .then(res => {
                    this.userLiked = res.data
                    // console.log(this.userLiked);
                    this.userLiked.forEach(liked => {
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
        },
        like() {
            api.post(`/api/auth/posts/${this.id}/likes`)
            let likesCount = parseInt(document.querySelector(`.likesCount`).textContent)
            if (this.likedIds.includes(this.id)) {
                const likeIndex = this.likedIds.indexOf(this.id)
                this.likedIds.splice(likeIndex, 1)
                likesCount -= 1
                document.querySelector(`.likesCount`).textContent = likesCount
            } else {
                this.likedIds.push(this.id)
                likesCount += 1
                document.querySelector(`.likesCount`).textContent = likesCount
            }
        },
        save(){
            api.post(`/api/auth/posts/${this.id}/saves`)
            if (this.savedIds.includes(this.id)){
                const saveIndex=this.savedIds.indexOf(this.id)
                this.savedIds.splice(saveIndex,1)
            }else {
                this.savedIds.push(this.id)
            }
        }

    }
}
</script>

<style scoped>
h1, h2, p, i {
    margin: 0;
}

a {
    text-decoration: none;
    color: #0060B6;
}

a:before {
    text-decoration: none;
}

.main-container {
    width: 70%;
    margin: 0 auto;
    border: 1px solid black;
    padding: 15px;
    display: flex;
}

.far.fa-heart.fas-heart-animation {
    animation: heart-pulse 0.3s ease-in-out;
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
