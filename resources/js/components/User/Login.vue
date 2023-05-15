<template>
    <div class="main-container">
        <div class="form-container">
            <div class="btn-container">
                <router-link  :to="{name:'user.login'}" class="route-btn active">Вхід</router-link>
                <router-link  :to="{name:'user.registration'}" class="route-btn">Реєстрація</router-link>
            </div>

            <div class="inputs-container">
                <p class="title">Пошта</p>
                <input type="email" v-model="email" class="form-control">
                <p class="title">Пароль</p>
                <input type="password" v-model="password" class="form-control">
            </div>

            <div class="submit-container">
                <input type="submit" @click.prevent="login" class="btn" value="Увійти">
                <p class="alert alert-danger custom-alert" v-if="error">{{error}}</p>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return{
            email:null,
            password:null,
            error:null,
        }
    },
    mounted() {
        this.$Progress.start()
        setTimeout(()=>{
            this.$Progress.finish()
        },350)
    },
    methods:{
        login(){
            axios.post('/api/auth/login',
                {
                    'email':this.email,
                    'password':this.password
                })
                .then(res=>{
                    let access_token=res.data.access_token
                    localStorage.setItem('access_token',access_token)
                    this.$router.push({name:'post.index'})

                })
                .catch(error=>{
                    this.error= error.response.data.error;
                })
        }
    },
}
</script>

<style scoped>

a{
    text-decoration: none;
}
.main-container {
    width: 490px;
    height: 600px;
    background: rgba(251, 251, 251, 0.91);
    box-shadow: 20px -20px 30px -2px #F4F4F4, -20px 20px 30px -2px #F4F4F4;
    border-radius: 35px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    margin-top: 20px;
}
.form-container {
    margin-top: 51px;
}
.btn-container {
    width: 299px;
    display: flex;
    justify-content: space-between;
}

.route-btn {
    width: 143px;
    height: 25px;
    background: #FBFBFB;
    border: 2px solid #000000;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.065em;
    color: black
}

.route-btn.active {
    background-color: red;
    color: white;
    border: 2px solid red;
}
.title {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.065em;
    margin: 0 0 10px 0;
    padding: 0;
    color: #000000;
}

.inputs-container {
    margin-top: 87px;
}
.form-control {
    margin-bottom: 9px;
    border: 1px solid #000000;
    border-radius: 7px;
    background-color: rgba(251, 251, 251, 0.91);
}
.submit-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
}
.btn {
    margin-top: 35px;
    background: #B00000;
    border-bottom: 1px solid #4F0000;
    border-radius: 7px;
    width: 162px;
    height: 32px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFF6F6;
}
</style>
