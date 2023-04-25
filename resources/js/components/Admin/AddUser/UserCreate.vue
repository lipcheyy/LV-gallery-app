<template>
    <div class="w-25">
        login
        <input type="text" v-model="name" class="form-control mb-2">
        email
        <input type="text" v-model="email" class="form-control mb-2">
        pass
        <input type="password" v-model="password" class="form-control mb-2">
        pass conf
        <input type="password" v-model="password_confirm" class="form-control mb-2">
        <input type="submit" value="add" @click.prevent="store">
    </div>
</template>

<script>
import api from "../../../api";

export default {
    name: "UserCreate",
    data(){
        return{
            name:'',
            email:null,
            password:null,
            password_confirm:null
        }
    },
    methods:{
    }
}
</script>

<style scoped>

</style>
