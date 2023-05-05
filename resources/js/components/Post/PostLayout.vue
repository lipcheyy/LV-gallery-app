<template>
    <div class="main-container">
        <div class="postUser">
            <div class="user">
                <img
                    src="./Images/Guest.png"
                    class="user_pic"
                    alt="user"
                />
                <a href='#' class="username">Vasya</a>
            </div>

            <div class="post-time">
                <a class="time">03.05.2023</a>
            </div>

        </div>
        <img class="img" :src="url">
        <div class="buttons-container">
            <div class="like_container">
                <a href="" @click.prevent="toggleLike(id)">
                    <i class="far fa-heart" :class="{'fas fa-heart': likedIds.includes(id)}"></i>
                </a>
                <span class="count_likes"><span>{{likesCount}}</span> позначок "Подобається"</span>
            </div>
            <div class="save_container">
                <a href="#" @click.prevent="toggleSave(id)">
                    <i class="far fa-bookmark" :class="{'fas fa-bookmark':savedIds.includes(id)}"></i>
                </a>
            </div>

        </div>
    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "PostLayout",
    props: ['Likes', 'url', 'title', 'id', 'likedIds', 'savedIds','likesCount'],
    data() {
        return {
            posts: null,
        }
    },
    mounted() {
        console.log(this.savedIds);
    },
    methods: {
        store() {
            api.post(`/api/auth/posts/${this.id}/likes`)
                .then(res => {
                })
        },
        save() {
            api.post(`/api/auth/posts/${this.id}/saves`)
                .then(res => {
                    console.log(res.data.message);
                })
        },
        toggleLike(id) {
            if (this.likedIds.includes(id)) {
                const index=this.likedIds.indexOf(id)
                this.likedIds.splice(index,1)
            } else {
                this.likedIds.push(id)
            }
            this.store()
        },
        toggleSave(id){
            if (this.savedIds.includes(id)) {
                const index=this.savedIds.indexOf(id)
                this.savedIds.splice(index,1)
            } else {
                this.savedIds.push(id)
            }
            this.save()
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

.img {
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
