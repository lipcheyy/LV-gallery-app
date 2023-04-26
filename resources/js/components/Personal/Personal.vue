<template>
    <div class="main-container">
<!--        <router-link v-if="userRole===1" :to="{name:'admin.statistic'}">Admin panel</router-link>-->
        <div class="user-info">
            <div class="circle">
                <img
                    class="user-icon"
                    src="../Includes/Images/User.png"
                    alt="User"
                >
            </div>

            <h1 class="name">Ім'я</h1>
            <p class="posts-count-title">Кількість ваших постів</p>
            <p class="posts-count">10</p>
        </div>

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
import api from "../../api";
export default {
    data(){
        return{
            userRole:null,
            username:null,
        }
    },
    name: "Personal",
    mounted() {
        this.userdata()
    },
    methods:{
        userdata() {
            api.post('/api/auth/me')
                .then(res=>{
                    const user =res.data
                    localStorage.setItem('user_role',user.role)
                    this.userRole= parseInt(user.role)
                })
        },
    },

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

p, h1 {
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

.posts-count-title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    color: #000000;
    margin-bottom: 3px;
}

.posts-count {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
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
