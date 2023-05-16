<template>
    <div class="main-container">
        <h1>Змінити дані користувача</h1>
        <div class="wrapper">
            <div ref="dropzone" class="dropzone_form">
                <i class="fa-solid fa-pencil"></i>
                <p>Змінити аватар</p>
            </div>
            <div class="change-inputs">
                <p class="title">Ім'я</p>
                <input type="text" v-model="name" placeholder="Ім'я" class="form-control">
                <p class="title">Старий пароль</p>
                <input type="text" v-model="old_password" placeholder="Введіть старий пароль" class="form-control">
                <p class="title">Пароль</p>
                <input type="password" v-model="password" placeholder="*******" class="form-control">
                <p class="title">Повторіть пароль</p>
                <input type="password" v-model="password_confirm" placeholder="*******" class="form-control">
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <input type="submit" class="control" value="Змінити пароль" @click.prevent="updatePassword">
                <button class="control avatar" type="submit" @click.prevent="update">Змінити аватар</button>
            </div>

        </div>

    </div>
</template>

<script>
import Dropzone from 'dropzone'
import api from "../../api";
export default {
    name: "ChangeData",
    data(){
        return{
            id:parseInt(localStorage.getItem('id')),
            name:'',
            old_password: null,
            password: null,
            password_confirm: null,
            dropzone:null,
            filename:null,
            responce:null
        }
    },
    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: 'test',
            autoProcessQueue: false,
            addRemoveLinks:true,
            maxFiles:1,

        })
    },
    methods:{
        update(){
            const data = new FormData
            const file = this.dropzone.getAcceptedFiles()[0]
            data.append('avatar',file)
            data.append('name',this.name)
            data.append('_method','PATCH')
            const id=parseInt(localStorage.getItem('id'))
            api.post(`/api/auth/users/${id}`,data)
            location.reload();
        },
        updatePassword(){
            api.patch(`/api/auth/users/${this.id}/password`,{
                password:this.password,
                old_password:this.old_password,
                password_confirm:this.password_confirm
            })
                .then(res=>{
                    console.log(res);
                })
                . catch(error=>{
                    const errors = error.response.data.errors;
                    if (errors.password_confirm) {
                        console.log(errors.password_confirm[0]);
                    }
                })
            location.reload();

        }
    }
}
</script>

<style scoped>
h1,h2,h3, p {
    margin: 0;
    padding: 0;
}
.main-container {
    margin: 0 auto;
    width: 60%;
    border-radius: 14px;
    margin: 0 auto;
    display: flex;
    background: #D9D9D9;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
    padding: 15px;
    flex-direction: column;
    align-items: center;
}
i {
    font-size: 32px;
}
.dropzone_form {
    width: 200px;
    height: 200px;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    flex-display: column;
    justify-content: center;
    align-items: center;
    outline: 2px dashed #D9D9D9;
    outline-offset: -25px;
}
.wrapper {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
}
.form-control {
    height: 30px;
}
.control {
    border: 0;
    height: 40px;
    width: 200px;
    margin: auto 0;
    background: #B00000;
    border: none;
    color: white;
    transition: all 0.5s ease;
    animation: glowing 0.5s infinite;
}
.control.avatar {
    animation: glowingSecond 0.5s infinite;
}
.control:hover {
    transform: scale(1.09);
}
@keyframes glowingSecond {
    0% { box-shadow: 0 0 12px #B00000; }
    50% { box-shadow: 0 0 5px #800e0e; }
    100% { box-shadow: 0 0 12px #B00000; }
}

@keyframes glowing {
    0% { box-shadow: 0 0 5px #B00000; }
    50% { box-shadow: 0 0 12px #800e0e; }
    100% { box-shadow: 0 0 3px #B00000; }
}
</style>
