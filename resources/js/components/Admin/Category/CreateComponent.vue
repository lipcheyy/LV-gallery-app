<template>
    <div class="categoryBlock">
        <h1 class="h1Category">Головна сторінка категорії</h1>
        <h3 class="h2Category">Назва категорії введення</h3>
        <form class="formAddCategory" action="#" method="#">
            <input class = "inputCategory" v-model="title" type="text" placeholder="Назва">
            <a class = "buttonCategory" href="#" @click.prevent="create()">Створити</a>
        </form>
        <table class="categoryTable">
            <thead>
            <tr>
                <td class="firstConTable">ID</td>
                <td class="secConTable">Назва</td>
                <td class="thrdConTable">Дії</td>
            </tr>
            </thead>
            <tr>
                <td>Breed</td>
                <td>Jack Russell</td>
                <td>
                    <div class="logoTable">
                        <a href="#"><img class="tableLogo"src="img/edit.png" alt="edit"></a>
                        <a href="#"><img class="tableLogo" :src="'../storage/site/del.png'" alt="del"></a>
                    </div>
                </td>
            </tr>
        </table>
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

</style>
