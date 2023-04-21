<template>
    <div>
        <header-layout ref="header_layout"></header-layout>
        <router-view></router-view>
    </div>
</template>

<script>

import api from "../api";
import HeaderLayout from "./Includes/HeaderMain";
export default {
    name: "Index",
    components: {HeaderLayout},
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
        // getAccessToken(){
        //     this.access_token=localStorage.getItem('access_token')
        // },
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

</style>
