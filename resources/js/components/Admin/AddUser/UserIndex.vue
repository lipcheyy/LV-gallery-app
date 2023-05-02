<template>
    <div class="Table">
        <user-create ref="user_create"></user-create>

        <div class="TableBlock">
            <table class="userTable">
                <thead>
                <td class="firstConTable">ID</td>
                <td class="secConTable">Назва</td>
                <td>email</td>
                <td class="secConTable">role</td>
                <td class="thrdConTable">Дії</td>
                </thead>
                <tbody>
                <template v-for="user in users">
                    <tr :class="userToEdit(user.id)?'d-none':''">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.role}}</td>

                        <td>
                            <div class="logoTable">
                                <a  class="tableLogo" href="#"
                                    @click.prevent="getUserDataToEdit(user.id,user.name,user.role)"
                                ><i class="fas fa-pencil"></i></a>
                                <a class="tableLogo" href="#" @click.prevent="destroy(user.id)"><i class="fas fa-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                    <tr :class="userToEdit(user.id)?'':'d-none'">
                        <td>{{user.id}}</td>
                        <td><input class="name_input" v-model="name" type="text" ></td>
                        <td>{{user.email}}</td>
                        <td>
                            <select v-model="role_id" class="role_select">
                                <template v-for="(role,roleId) in roles">
                                    <option :value="roleId">{{role}}</option>
                                </template>
                            </select>
                        </td>
                        <td><a class="tableLogo" href="#" @click.prevent="update(user.id)"><i class="far fa-save"></i></a></td>
                    </tr>

                </template>
                </tbody>
            </table>
        </div>
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
            name:'',
            role_id:null,
            roles:null
        }
    },
    mounted() {
        this.getUsers()
        this.getRoles()
    },
    methods:{

        getRoles(){
            api.get('/api/auth/admin/users/roles')
                .then(res=>{
                    this.roles=res.data
                })
        },
        getUsers() {
            api.get('/api/auth/admin/users')
                .then(res=>{
                    this.users=res.data.data
                })
        },
        getUserDataToEdit(id,name,role){
            this.toEdit=id
            this.name=name
            this.role_id=role
        },
        userToEdit(id){
            return this.toEdit===id
        },
        update(id){
            this.toEdit=null
            api.patch(`/api/auth/admin/users/${id}`,
                {
                    name:this.name,
                    role:this.role_id
                })
                .then(res=>{
                    this.getUsers()
                    console.log(res.data.message);
                })
        },
        destroy(id){
            api.delete(`/api/auth/admin/users/${id}`)
                .then(res=>{
                    this.getUsers()
                })
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Istok+Web&display=swap');
*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
}

a{
    outline: none;
    text-decoration: none;
    color: #666;
}
.TableBlock{
    margin-top: 42px;
    margin-bottom: 116px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.14em;
}
.userTable {
    min-width: 400px;
    margin-bottom: 20px;
    background: #F1F1F1;
    border: 3px solid #323232;
    box-shadow: 5px -4px 10px rgba(0, 0, 0, 0.25);
    border-collapse: collapse;
}
.userTable td {
    border: 3px solid #323232;
    padding: 5px;
}

.userTable thead{
    background: #4D4D4D;
    color: #FFFFFF;
}
input{
    font-style: normal;
    font-size: 24px;
    min-height: 50px;
    background: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 7px;
    padding-left: 10px;
}
.role_select{
    width: 200px;
    height: 50px;
    background: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 7px;
    font-style: normal;
    font-size: 24px;
    line-height: 29px;
    padding-left: 24px;
    color: #000000;
}
.logoTable{
    display: flex;
    justify-content: center;
    gap: 46%;
    padding-bottom: 7px;
    border: none;
    width: 200px;
}

.tableLogo{
    width: 16px;
    height: 20px;
    color:red;
}
@media only screen and (max-width:900px) {
    .TableBlock{
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logoTable{
        width: 70px;
    }
    input{
        max-width: 150px;
        font-size: 18px;
        min-height: 40px;
        background: #FFFFFF;
        border-radius: 7px;
    }
    .role_select{
        max-width: 100px;
        height: 40px;
        font-size: 18px;
        padding-left: 5px;
        color: #000000;
    }
    option{
        max-width: 100px;
        height: 40px;
        font-size: 18px;
    }
}
@media only screen and (max-width:500px) {
    .userTable{
        font-size: 15px;
        min-width: 350px;
    }
}
</style>
