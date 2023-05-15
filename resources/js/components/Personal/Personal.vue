<template>
    <div class="main-container">
        <!--        <router-link v-if="userRole===1" :to="{name:'admin.statistic'}">Admin panel</router-link>-->
        <div class="user-info">
            <div class="circle">
                <img v-if="isEmpty"
                     src="./Images/Guest.png"
                     class="user_pic"
                     alt="user"
                />
                <img v-if="!isEmpty"
                     :src="avatarUrl"
                     class="user_pic"
                     alt="user"
                />
            </div>
            <h1 class="name">{{username}}</h1>
            <router-link :to="{name: 'user.change'}" class='control'><h3>Змінити дані</h3></router-link>
        </div>


        <div class="control-page">
            <div class="line">
                <div class="subline" :class="{ active: showOwnPosts === true }"></div>
                <div class="subline" :class="{ active: showSavedPosts === true }"></div>
            </div>
            <div class="buttons-container">
                <button class="control" :class="{ active: showOwnPosts === true }"
                        @click.prevent="showOwnPosts=true,
                                        showSavedPosts=false">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <h3>Створені</h3>
                </button>
                <button class="control" :class="{ active: showSavedPosts === true }"
                        @click.prevent="showSavedPosts=true,
                                        showOwnPosts=false">
                    <i class="far fa-bookmark"></i>
                    <h3>Збережені</h3>

                </button>
            </div>

        </div>
        <user-posts v-if="showOwnPosts"></user-posts>
        <user-saved v-if="showSavedPosts"></user-saved>
    </div>
</template>

<script>
import api from "../../api";
import UserPosts from "./UserPosts";
import UserSaved from "./UserSaved";
export default {
    components: {
        UserPosts,
        UserSaved
    },

    data() {
        return {
            userRole: null,
            username: localStorage.getItem('username'),
            showOwnPosts: true,
            showSavedPosts: false,
            avatarUrl:null,
            user:null,
            isEmpty:true
        }
    },
    name: "Personal",
    mounted() {
        this.userdata()
        this.$Progress.start()
        setTimeout(()=>{
            this.$Progress.finish()
        },500)
        this.userRes()
    },
    methods: {
        userdata() {
            api.post('/api/auth/me')
                .then(res => {
                    const user = res.data
                    localStorage.setItem('user_role', user.role)
                    this.userRole = parseInt(user.role)

                })
        },
        userRes(){
            api.get('/api/auth/users/user')
                .then(res=>{
                    this.user=res.data.data
                    if (this.user.avatar.length!==0){
                        this.isEmpty=false
                        this.user.avatar.forEach(avatar=>{
                            console.log(avatar);
                            this.avatarUrl=avatar.url
                        })

                    }
                })
        }
    },

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

p, h1, h2, h3 {
    margin: 0;
    padding: 0;
}

.main-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
}

.control-page {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.line {
    width: 100%;
    height: 4px;
    border-radius: 10%;
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    gap: 34px;
    margin: 10px 0 0 0;
}

.subline {
    width: 200px;
    height: 100%;
}

.subline.active {
    background-color: black;
}

.buttons-container {
    margin-top: 20px;
    display: flex;
    gap: 34px;
    margin-bottom: 50px;
    flex-wrap: wrap;
    justify-content: center;
}

i {
    font-size: 24px;
}

.control {
    width: 200px;
    height: 45px;
    color: black;
    text-decoration: none;
    border: 2px solid #000000;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.control.active {
    background: #B00000;
    border: none;
    color: white;
}

.circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #D9D9D9;
    box-shadow: 3px -6px 10px rgba(60, 60, 60, 0.14);

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 5px;
}

.user-icon {
    width: 75%;
    height: 75%;
}

.user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.name {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    color: #000000;
    margin-bottom: 5px;
}


.posts {
    width: 80%;
    background: rgba(183, 183, 183, 0.14);
    border: 4px dashed #C5C5C5;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    /*height: 47.50692520775623vh;*/
    column-gap: 30px;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 30px 0 30px 0;
}

.post {
    width: 200px;
    height: 250px;
    cursor: pointer;
}



</style>
