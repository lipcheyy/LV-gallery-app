<template>
    <div class="asdas">
        <router-link v-if="!access_token" :to="{name:'user.login'}">login</router-link>
        <router-link v-if="!access_token" :to="{name:'user.registration'}">registration</router-link>
        <router-link v-if="access_token" :to="{name:'post.create'}">Add new</router-link>
        <router-link v-if="access_token" :to="{name:'personal.page'}">personal</router-link>
        <router-link v-if="access_token" :to="{name:'post.index'}">posts</router-link>
        <a href="#" v-if="access_token" @click.prevent="logout">logout</a>
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

</style>
