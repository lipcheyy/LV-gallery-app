<template>

    <div class="dropzone_container">
        <div class="wrapper">
            <div ref="dropzone" class="dropzone_form">
                <p class="drop-title">
                    Натисніть або перетягніть зображення
                </p>
            </div>
            <div class="advice-container">
                <p class="advice">Рекомендуємо використовувати файли високої якості у форматі .jpg (розміром менше 20 МГ)</p>
            </div>
        </div>
        <div class="data-wrapper">
            <input v-model="title" type="text" name="" class="file-title" id="" placeholder="Назва">
<!--            <vue-editor v-model="title" class="file-title"></vue-editor>-->
            <div class="name-wrapper">
                <img
                    src="./Images/Guest.png"
                    alt="Guest"
                >
                <p class="name">{{username}}</p>
            </div>
            <div class="form-group">
                <p class="category-title">
                    Вибрати категорію
                </p>
                <select v-model="category_id" class="selector">
                    <template v-for="category in categories">
                        <option  :value="category.id" class="option">{{category.title}}</option>
                    </template>
                </select>
            </div>
            <input @click.prevent="store" type="submit" class="button-create" value="Створити">
            <!--        <div v-if="post">-->
            <!--            <p>{{post.title}}</p>-->
            <!--            <div v-for="image in post.images">-->
            <!--                <img  :src="image.preview_url" alt="">-->
            <!--                <img  :src="image.url" alt="">-->
            <!--            </div>-->

            <!--        </div>-->
            <div>{{response}}</div>
        </div>

    </div>
</template>

<script>
import Dropzone from 'dropzone'

import api from "../../api";
import {VueEditor} from "vue2-editor"
export default {
    name: "CreatePost",
    components:{
        VueEditor
    },
    data() {
        return {
            dropzone: null,
            title: null,
            categories: null,
            category_id:1,
            response:null,
            post:null,
            username:''
        }
    },

    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: 'test',
            autoProcessQueue: false,
            addRemoveLinks:true
        })
        this.getCategories()
        this.getPost()
        this.username=localStorage.getItem('username')
    },
    methods: {
        store() {
            const data = new FormData
            const files = this.dropzone.getAcceptedFiles()
            files.forEach(file => {
                data.append('images[]', file)
                this.dropzone.removeFile(file)
            })
            data.append('title',this.title)
            data.append('category_id',this.category_id)
            api.post('/api/auth/posts', data)
                .then(res => {
                    this.response=res.data.message
                    this.title=''
                    this.getPost()
                })
        },
        getCategories() {
            api.get('/api/auth/admin/category')
                .then(res => {
                    this.categories = res.data.data
                })
            },
        getPost(){
            api.get('/api/auth/posts')
                .then(res=>{
                    this.post=res.data.data
                })
        }
    }
}
</script>

<style scoped>
.dropzone_container {
    height: 620px;
    width: 575px;
    left: 622px;
    top: 192px;
    border-radius: 14px;
    margin: 0 auto;
    background: #D9D9D9;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
}
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.dropzone_form {
    width: 250px;
    height: 450px;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    flex-display: column;
    justify-content: center;
    align-items: center;
    outline: 2px dashed #D9D9D9;
    outline-offset: -25px;
}

.drop-title {
    position: absolute;
    font-family: 'Praise', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.065em;
    color: #000000;
    width: 135px;
}

.data-wrapper {
    width: 260px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.advice {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    width: 212px;
    color: #393939;
    margin-top: 17px;
}
.file-title {
    background: #D9D9D9;
    border-width: 2px 0px;
    border-style: solid;
    border-color: #7D7D7D;
    border-radius: 7px;
    width: 260px;
    height: 45px;
    padding-left: 10px;
    display: flex;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #4B4B4B;
    margin-top: 11px;

}

.file-title::placeholder {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    align-items: center;
    color: #7D7D7D;

}

.category-title {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #4B4B4B;
    margin-top: 20px;
}

.selector {
    background: #D9D9D9;
    border-width: 2px 0px;
    border-style: solid;
    border-color: #7D7D7D;
    border-radius: 7px;
    width: 260px;
    height: 45px;
    padding-left: 10px;
    display: flex;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #4B4B4B;
}

.button-create {
    height: 45px;
    width: 160px;
    border-radius: 20px;
    background: #B00000;

    color: white;
    font-family: 'Praise', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    border: none;
    outline: none;
    display: flex;
    text-align: center;
    justify-content: center;

    margin-top: 156px;
}

.name-wrapper {
    height: 50px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
}

.name-wrapper > img{
    width: 50px;
    height: 50px;
}

.name {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #4B4B4B;
    margin: auto 0;
    margin-left: 12px;
}
.option {

}
</style>
