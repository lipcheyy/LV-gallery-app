<template>
    <div class="main-container">
        <div class="postUser">
            <div class="user">
                <img
                    src="./Images/Guest.png"
                    class="user_pic"
                    alt="user"
                />
                <template v-if="user">
                    <a href='#' class="username">{{ user.name }}</a>
                </template>
            </div>

            <div class="post-time">
                <a class="time">{{ date }}</a>
            </div>

        </div>

        <div class="post-images" :style="{ 'background-image': 'url(' + url + ')' }">
<!--             <img class="img" :src="url">-->

        </div>
        <div class="buttons-container">
            <div>{{ title }}</div>
            <div class="like_container">
                <a href="" @click.prevent="toggleLike(id)">
                    <i class="far fa-heart likeBtn"
                       :class="{'fas fa-heart': likedIds.includes(id), 'fas-heart-animation likeBtn': likedIds.includes(id)}"></i>
                </a>
                <span class="count_likes"><span :class="`likesCount-${id}`">{{ likesCount }}</span> позначок "Подобається"</span>
            </div>
            <div class="save_container">
                <a href="#" @click.prevent="toggleSave(id)">
                    <i class="far fa-bookmark"
                       :class="{'fas fa-bookmark':savedIds.includes(id), 'fas-bookmark-animation': savedIds.includes(id)} "></i>
                </a>
            </div>

        </div>
        <router-link :to="{name:'post.show',params:{id:id}}" class="btn btn-primary">детальніше</router-link>
        <template v-if="user.id===userId ||userRole===1">
            <router-link :to="{name:'post.edit',params:{id:id}}" class="btn btn-success">
                <i class="fas fa-pencil"></i>
            </router-link>
            <a href="#" class="btn btn-danger" @click.prevent="destroy(id)"><i class="fas fa-trash"></i></a>
        </template>

    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "PostLayout",
    props: ['url', 'title', 'id', 'likedIds', 'savedIds', 'likesCount', 'user', 'date'],
    data() {
        return {
            posts: null,
            username: '',
            userRole:parseInt(localStorage.getItem('user_role')),
            userId: parseInt(localStorage.getItem('id'))
        }
    },
    mounted() {
    },
    methods: {
        like() {
            api.post(`/api/auth/posts/${this.id}/likes`)
        },
        save() {
            api.post(`/api/auth/posts/${this.id}/saves`)
        },
        toggleLike(id) {
            let content = parseInt(document.querySelector(`.likesCount-${id}`).textContent)
            if (this.likedIds.includes(id)) {
                const index = this.likedIds.indexOf(id)
                this.likedIds.splice(index, 1)
                content -= 1
                document.querySelector(`.likesCount-${id}`).textContent = content
            } else {
                this.likedIds.push(id)
                content += 1
                document.querySelector(`.likesCount-${id}`).textContent = content
            }
            this.like()
        },
        toggleSave(id) {
            if (this.savedIds.includes(id)) {
                const index = this.savedIds.indexOf(id)
                this.savedIds.splice(index, 1)
            } else {
                this.savedIds.push(id)
            }
            this.save()
        },
        destroy(id){
            api.delete(`/api/auth/posts/${id}`)
                .then(()=>{
                    this.$parent.getPosts()
                })
        }
    }
}
</script>

<style scoped>
.main-container {
    height: 78vh;
    width: 350px;
    display: flex;
    flex-direction: column;
}
.post-images {
    background: 50% 50% no-repeat;
    background-size: cover;
    width: 100%;
    height: 700px;
}
.img {
    object-fit: cover;
    width: 100%;
    height: 80%;
}

.buttons-container {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.like_container {
    display: flex;
    align-items: center;
    order: 1;
    margin-left: 10px;
}

.save_container {
    display: flex;
    align-items: center;
    order: 2;
    margin-right: 17px;
}

.fa-heart {
    transition: color 0.2s ease-in-out;
}

.fa-bookmark {
    transition: color 0.2s ease-in-out;
}


.far.fa-heart.fas-heart-animation {
    animation: heart-pulse 0.3s ease-in-out;
}

.far.fa-bookmark.fas-bookmark-animation {
    animation: heart-pulse 0.3s ease-in-out;
}

@keyframes heart-pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}

a {
    text-decoration: none;
    color: black;
}

i {
    font-size: 35px;
    color: #000000;
}

.count_likes {
    padding-left: 11px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #383737;
}

.postUser {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
}

.user {
    height: 80%;
    display: flex;
    align-items: center;
}

.user_pic {
    height: 100%;
    margin-right: 5px;
}


</style>
