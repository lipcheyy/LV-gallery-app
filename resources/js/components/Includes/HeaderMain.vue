<template>
    <div class="asdas">
        <div class="header">
            <div class="leftNav">
                <div class="main_logo"><a href="#" class="logo"> <img class="logo" src="./Images/logo.png" alt="logo">
                </a></div>
                <input type="checkbox" id="check">
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <ul class="navbarL">
                    <li>
                        <router-link exact-active-class="active" v-if="access_token" :to="{name:'post.index'}"
                                     class="white_style_text">Головна
                        </router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="active" v-if="access_token" :to="{name:'post.create'}"
                                     class="white_style_text">Створити
                        </router-link>
                    </li>
                    <div class="category_block" id="categoryy">
                        <li id="categoryy"><a class="white_style_text" id="categoryy">Категорії </a></li>
                    </div>
                    <div class="category_list" v-if="access_token" >
                        <ul>
                            <template v-for="category in categories">
                                <router-link :to="{name:'category.posts',params:{id:category.id}}">{{ category.title}}</router-link>
                            </template>
                        </ul>
                    </div>
                    <li>
                        <router-link exact-active-class="active" v-if="access_token && userRole===1"
                                     :to="{name:'admin.statistic'}" class="white_style_text">Адмін панель
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="rightNav">
                <ul class="navbarR">
                    <li>
                        <router-link v-if="access_token" :to="{name:'personal.page'}"><img class="icoRighr"
                                                                                           src="./Images/my_acc.png"
                                                                                           alt="myAccount">
                        </router-link>
                    </li>
                    <li><a href="#" v-if="access_token" @click.prevent="logout"><img class="icoRighr"
                                                                                     src="./Images/exit_ico.png"
                                                                                     alt="EXIT"></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "header-layout",
    data() {
        return {
            access_token: null,
            userRole: null,
            categories: null,
            category_id: 1
        }
    },
    mounted() {
        this.getAccessToken()
        this.userdata()
        this.getCategories()
    },
    updated() {
        this.getAccessToken()
        this.userdata()
    },
    methods: {
        getAccessToken() {
            this.access_token = localStorage.getItem('access_token')
        },
        logout() {
            api.post('/api/auth/logout')
                .then(res => {
                    localStorage.clear()
                    this.$router.push({name: 'user.login'})
                })
        },

        getCategories() {
            if (this.access_token){
                api.get('/api/auth/admin/category')
                    .then(res => {
                        this.categories = res.data.data
                    })
            }
        },

        userdata() {
            if (this.access_token) {
                api.post('/api/auth/me')
                    .then(res => {
                        const user = res.data
                        localStorage.setItem('user_role', user.role)
                        localStorage.setItem('username', user.name)
                        localStorage.setItem('id', user.id)
                        this.userRole = parseInt(user.role)
                    })
            }
        },
    }

}
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Praise&display=swap');
button,a {
    outline: none;
    text-decoration: none;
}

.checkbtn {
    position: absolute;
    right: 15px;
    font-size: 34px;
    cursor: pointer;
    float: right;
    line-height: 80px;
    margin-right: 30px;
    display: none;
}

#check {
    display: none;
}

.header {
    background: #D9D9D9;
    min-height: 135px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 13;
    /*margin-bottom:74px;*/
}

.leftNav {
    text-decoration: none;
    display: flex;
    list-style: none;
    align-items: center;
    padding-left: 38px;
}

.navbarL {
    text-decoration: none;
    display: flex;
    list-style: none;
    align-items: center;;
}

.navbarR {
    text-decoration: none;
    display: flex;
    list-style: none;
    align-items: center;
    padding-right: 85px;
}

.navbarR li,
.navbarL li {
    padding-left: 37px;
    z-index: 2;
}

.logo {
    width: 60px;
    height: 60px;
}

.icoRighr {
    width: 50px;
    height: 50px;
}

.white_style_text {
    background: #FFFFFF;
    border-radius: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.065em;
    padding: 7px 20px;
    color: #000000;
    display: flex;
    align-items: center;
}

.v_ico {
    width: 12.5px;
    height: 8.04px;
    margin-left: 30px;
    color: black;
}

.active {
    color: #FFFFFF;
    background: #B00000;
}

#check {
    display: none;
}

#categoryy {
    position: relative;
}

.category_list {
    position: absolute;
    top: 135px;
    z-index: 1;
    display: none;
    max-width: 80%;
    background: #D9D9D9;
    border: 1px solid black;
    border-top: none;
    padding: 0px 15px 15px 15px;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
}

.category_list ul {
    display: flex;
    flex-direction: column;
    max-height: 600px;
    gap: 20px;
    flex-wrap: wrap;
}

.category_list a {
    list-style: none;
    font-size: 18px;
    text-align: center;
    background: #FFFFFF;
    border-radius: 5px;
    font-style: normal;
    padding: 7px 20px;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.category_block {
    padding-bottom: 45px;
    margin-top: 46px;
}

#categoryy:hover + .category_list {
    display: flex;
}

.category_list:hover {
    display: flex;
}

@media only screen and (max-width: 1309px) {
    .navbarL {
        padding-left: 15px;
    }

    .navbarR {
        padding-right: 15px;
    }

    .navbarR li,
    .navbarL li {
        padding-left: 15px;
    }
}

@media only screen and (max-width: 905px) {
    .category_block {
        padding-bottom: 0px;
        margin-top: 0px;
    }

    .navbarR {
        padding-right: 100px;
    }

    .checkbtn {
        display: block;
    }

    .navbarL {
        position: absolute;
        width: 100%;
        height: max-content;
        padding: 20px 0;
        background-color: rgba(128, 128, 128, 0.9);
        top: 136px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        left: -100%;
        transition: all .5s;
        z-index: 1;
    }

    .red_style_text,
    .white_style_text {
        border-radius: 10px;
        width: 360px;
    }

    .navbarL li {
        padding-left: 0px;
    }

    #check:checked ~ .navbarL {
        left: 0%;
    }

    .category_list {
        top: 198px;
        border: none;
        max-width: 100%;
        width: 100%;
        gap: 10px;
        background-color: rgba(128, 128, 128, 0.9);
        transition: all .5s;
        justify-content: center;
        align-items: center;
        padding: 15px;
        transition: all .5s;
    }

    .category_list ul {
        display: flex;
        flex-direction: column;
        max-height: max-content;
        width: 300px;
        gap: 20px;
        flex-wrap: wrap;
        padding: 0px;
    }

    .category_list a {
        list-style: none;
        font-size: 18px;
        text-align: center;
        background: #FFFFFF;
        border-radius: 5px;
        font-style: normal;
        padding: 7px 20px;
        color: #000000;
    }
}
</style>
