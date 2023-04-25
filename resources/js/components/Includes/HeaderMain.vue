<template>
    <div class="asdas">
        <div class="header">
            <div class="leftNav">
                <ul class="navbarL">
                    <li><a href="#" class="logo"> <img class= "logo" src="./Images/logo.png" alt="logo"> </a></li>
                    <li><router-link v-if="access_token" :to="{name:'post.index'}" class="white_style_text">Головна</router-link></li>
                    <li><router-link v-if="access_token" :to="{name:'post.create'}" class="white_style_text">Створити</router-link></li>
                    <li><a href="#" class="red_style_text">Категорії <img src="./Images/v.png" alt="v" class="v_ico"></a></li>
                </ul>
            </div>

            <div class="rightNav">
                <ul class="navbarR">
                    <li><a href="#" class="white_style_text">Адмін панель</a></li>
                    <li><router-link v-if="access_token" :to="{name:'personal.page'}"><img class= "icoRighr" src="./Images/my_acc.png" alt="myAccount"></router-link></li>
                    <li><a href="#" v-if="access_token" @click.prevent="logout"><img class= "icoRighr" src="./Images/exit_ico.png" alt="EXIT"></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "header-layout",
    data(){
        return{
            access_token:null
        }
    },
    methods:{
        getAccessToken(){
            this.access_token=localStorage.getItem('access_token')
        },
        logout() {
            api.post('/api/auth/logout')
                .then(res=>{
                    localStorage.clear()
                    this.$router.push({name:'user.login'})
                })
        },
    }

}
</script>

<style scoped>
*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Praise&display=swap');
a{
    outline: none;
    text-decoration: none;
}
.header{
    background: #D9D9D9;
    min-height: 135px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*margin-bottom:74px;*/
}
.navbarL{
    text-decoration: none;
    display: flex;
    list-style: none;
    align-items: center;
    padding-left: 38px;
}
.navbarR{
    text-decoration: none;
    display: flex;
    list-style: none;
    align-items: center;
    padding-right: 85px;
}
.navbarR li,
.navbarL li{
    padding-left: 37px;
}
.logo{
    width: 60px;
    height: 60px;
}
.icoRighr{
    width: 50px;
    height: 50px;
}
.red_style_text,
.white_style_text{
    background: #FFFFFF;
    border-radius: 20px;
    font-style:normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.065em;
    padding: 7px 20px;
    color: #000000;
    display: flex;
    align-items: center;
}
.v_ico{
    width: 12.5px;
    height: 8.04px;
    margin-left: 30px;
}
.red_style_text{
    color: #FFFFFF;
    background: #B00000;
}
</style>
