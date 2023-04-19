<template>
    <div class="categoryBlock">
        <h1 class="h1Category">Головна сторінка категорії</h1>
        <h3 class="h2Category">Назва категорії введення</h3>
        <form class="formAddCategory" action="#" method="#">
            <input class = "inputCategory" v-model="title" type="text" placeholder="Назва">
            <a class = "buttonCategory" href="#" @click.prevent="create()">Створити</a>
        </form>
    </div>
</template>

<script>
import api from "../../../api";

export default {
    name: "CreateComponent",
    data(){
        return{
            title:null
        }
    },
    methods:{
        create(){
            api.post('/api/auth/admin/category',{title:this.title})
                .then(res=>{
                    this.title=''
                    this.$parent.getCategories();
                })
        },
        backcall(){
            console.log('siiiuiii');;
        }
    }
}
</script>

<style scoped>
*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
}
a{
    outline: none;
    text-decoration: none;
}
@import url('https://fonts.googleapis.com/css2?family=Praise&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Praise&display=swap');
.formAddCategory,
.categoryBlock{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 24px;
}
.h1Category{
    font-family: 'Istok Web';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 92px;
    text-align: center;
    letter-spacing: 0.14em;
    color: #550000;
    text-shadow: 5px 4px 7px rgba(176, 0, 0, 0.25);
}
.h2Category{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
}
.inputCategory{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    min-width: 450px;
    min-height: 50px;
    background: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 7px;
    padding: 11px 22px;
}
.inputCategory::placeholder {
    color: #C2C2C2;
}
.buttonCategory{
    padding: 11px 72px;
    background: #B00000;
    border-radius: 7px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
}
</style>
