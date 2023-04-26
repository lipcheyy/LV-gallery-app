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
        <select v-model="role_id">
            <template v-for="(role,roleId) in roles">
                <option :value="roleId">{{role}}</option>
            </template>
        </select>
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
            password_confirm:null,
            roles:null,
            role_id:1,
        }
    },
    mounted() {
        this.getRoles()
    },
    methods:{
        getId(){
            console.log(this.role_id);
        },
        getRoles(){
            api.get('/api/auth/admin/users/roles')
                .then(res=>{
                    this.roles=res.data
                    this.keys=Object.keys(this.roles)
                    console.log(this.keys);
                })
        },
        store(){
            api.post('/api/auth/admin/users', {
                name:this.name,
                email:this.email,
                password:this.password,
                password_confirm:this.password_confirm,
                role:this.role_id
            })

        }
    }
}
</script>

<style scoped>

</style>
