<template>

    <div class="userBlock">
        <h1 class="h1User">Головна сторінка користувачів</h1>
        <form class="formAddUser" action="#" method="#">
            <div class="form_input">
                <label>Ім'я користувача</label>
                <input type="text" v-model="name" class="form-control mb-2">
            </div>
            <div class="form_input">
                <label>Пошта користувача</label>
                <input type="text" v-model="email" class="form-control mb-2">
            </div>
            <div class="form_input">
                <label>Пароль</label>
                <input type="password" v-model="password" class="form-control mb-2">
            </div>
            <div class="form_input">
                <label>Підтвердження пароля</label>
                <input type="password" v-model="password_confirm" class="form-control mb-2">
            </div>
            <div class="button_select_block">
                <div class="select">
                    <select v-model="role_id" class="role_select">
                        <template v-for="(role,roleId) in roles">
                            <option :value="roleId">{{role}}</option>
                        </template>
                    </select>
                </div>
                <input class="buttonUser" type="submit" value="Створити" @click.prevent="store">
            </div>

        </form>
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
                .then(res=>{
                    this.$parent.getUsers()
                    this.name=''
                    this.email=''
                    this.password=''
                    this.password_confirm=''
                })

        }
    }
}
</script>

<style scoped>
*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
}
a{
    outline: none;
    text-decoration: none;
}
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Istok+Web&display=swap');
.userBlock{
    margin-top: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 24px;
}
.h1User{
    font-family: 'Istok Web', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: calc(24px + 40*(100vw / 1280));
    text-align: center;
    letter-spacing: 0.14em;
    color: #550000;
    text-shadow: 5px 4px 7px rgba(176, 0, 0, 0.25);
    margin-bottom: 10px;
}
.formAddUser{
    text-align: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 24px;
}
.form_input label{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 14px;
}
.form_input input{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: calc(24px + (100vw / 1280));
    line-height: 29px;
    display: flex;
    align-items: center;
    width: 46%;
    min-width: 450px;
    min-height: 50px;
    background: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 7px;
    padding: 11px 22px;
    margin-bottom: 14px;
}
select {
    outline: none;
    background-color: transparent;
}

.button_select_block{
    display: flex;
    gap: 50px;
}
-webkit-appearance{
    color: red;
}
select:hover {
    background-color: transparent;
}
.role_select{
    width: 200px;
    height: 50px;
    background: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 7px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    padding-left: 24px;
    display: flex;
    align-items: center;
    color: #000000;
}
.buttonUser{
    width: 200px;
    height: 50px;
    background: #B00000;
    border-radius: 7px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: calc(24px + 3 * (100vw / 1280));
    line-height: 29px;
    color: #FFFFFF;
}
.buttonUser:hover{
    background-color: #e60404;
    box-shadow: 0 0 12px #ff0000;
    -moz-box-shadow: 0 0 12px #a30707;
    -o-box-shadow: 0 0 12px #bd1206;
    -ms-box-shadow: 0 0 12px #851202;
    -webkit-box-shadow: 0 0 12px #d81f1f;
}
@media only screen and (max-width:500px) {
    .form_input input {
        min-width: 300px;
        font-size: 18px;
        min-height: 50px;
        border-radius: 7px;
        padding: 11px 22px;
    }
    .h1User {
        font-size: 50px;
    }
    .button_select_block{
        flex-direction: column;
        gap: 30px;
    }
    .button_select_block,
    .formAddUser{
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 24px;
    }
    .buttonUser{
        width: 260px;
        height: 55px;
    }
}
</style>
