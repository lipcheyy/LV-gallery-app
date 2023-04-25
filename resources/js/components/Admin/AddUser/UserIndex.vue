<template>
    <div>
        <user-create></user-create>
        <table class="table">
            <thead>
            <tr>
                <td class="firstConTable">ID</td>
                <td class="secConTable">Назва</td>
                <td class="secConTable">role</td>
                <td class="thrdConTable">Дії</td>
            </tr>
            </thead>
            <tbody>
            <template v-for="user in users">
                <tr :class="userToEdit(user.id)?'d-none':''">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.role}}</td>
                    <td>
                        <div class="logoTable">
                            <a class="tableLogo" href="#" @click.prevent="getUserDataToEdit(user.id,user.name)"><i class="fas fa-pencil"></i></a>
<!--                            <a class="tableLogo" @click.prevent="destroy(user.id)"  href="#"><i class="fas fa-trash"></i></a>-->
                        </div>
                    </td>
                <tr :class="userToEdit(user.id)?'':'d-none'">
                    <td>{{user.id}}</td>
                    <td><input v-model="name" type="text" class="form-control" ></td>
                    <td><a href="#" @click.prevent="update(user.id)">update</a></td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import UserCreate from "./UserCreate";
import api from "../../../api";
export default {
    name: "UserIndex",
    components: {UserCreate},
    data(){
        return{
            users:null,
            toEdit:null,
            name:null
        }
    },
    mounted() {
        // this.getUsers()
    },
    methods:{
        getUserDataToEdit(id,name){
            this.toEdit=id
            this.name=name
        },
        userToEdit(id){
            return this.toEdit===id
        },


    }
}
</script>

<style scoped>

</style>
