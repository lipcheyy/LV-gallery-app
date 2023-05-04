<template>
    <div class="wrapper">
        <div class="header">
            <header-layout ref="header_layout"></header-layout>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="footer">
            <footer-layout></footer-layout>
        </div>
    </div>
</template>

<script>

import api from "../api";
import HeaderLayout from "./Includes/HeaderMain";
import FooterLayout from "./Includes/FooterLayout";
export default {
    name: "Index",
    components: {HeaderLayout,FooterLayout},
    data(){
        return{
            access_token:null,
        }
    },
    mounted() {
         this.$refs.header_layout.getAccessToken()

    },
    updated() {
         this.$refs.header_layout.getAccessToken()

    },
    methods:{
        getAccessToken(){
            this.access_token=localStorage.getItem('access_token')
        },
        // logout() {
        //     api.post('/api/auth/logout')
        //         .then(res=>{
        //             localStorage.clear()
        //             this.$router.push({name:'user.login'})
        //         })
        // },

    }
}
</script>

<style scoped>
    .main{
        margin-top: 50px;
        margin-bottom: 140px;
        position: relative;
    }
    .wrapper{
        min-height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .footer{
        margin-top: auto;
    }
</style>
