<template>
    <div>
        <Header ref="header"></Header>

        <router-view></router-view>
    </div>
</template>

<script>

import api from "../api";
import Header from "./Includes/HeaderMain";
export default {
    name: "Index",
    components: {Header},
    data(){
        return{
            access_token:null,
        }
    },
    mounted() {
        this.$refs.header.getAccessToken()
    },
    updated() {
        this.$refs.header.getAccessToken()
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
