<template>
    <div>
        <p>category main page</p>

        <create-component ref="test"></create-component>

        <div class="TableBlock">
            <table class="categoryTable">
                <thead>
                <tr>
                    <td class="firstConTable">ID</td>
                    <td class="secConTable">Назва</td>
                    <td class="thrdConTable">Дії</td>
                </tr>
                </thead>
                <tbody>
                <template v-for="category in data">
                    <tr :class="categoryToEdit(category.id)?'d-none':''">
                        <td>{{category.id}}</td>
                        <td>{{category.title}}</td>
                        <td>
                            <div class="logoTable">
                                <a class="tableLogo" href="#" @click.prevent="getCategoryDataToEdit(category.id,category.title)"><i class="fas fa-pencil"></i></a>
                                <a class="tableLogo" href="#"><i class="fas fa-trash"></i></a>
                            </div>
                        </td>
                    <tr :class="categoryToEdit(category.id)?'':'d-none'">
                        <td>{{category.id}}</td>
                        <td><input v-model="title" type="text" class="form-control" ></td>
                        <td><a href="#" @click.prevent="update(category.id)">update</a></td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import api from "../../../api";
import CreateComponent from "./CreateComponent";

export default {
    name: "CategoryIndex",
    components: {CreateComponent},
    data() {
        return {
            data: null,
            toEdit:null,
            title:null,
        }
    },
    mounted() {
        //console.log(this.$refs.test.backcall());
        this.getCategories()
    },
    methods: {
        getCategories() {
            api.get('/api/auth/admin/category')
                .then(res => {
                    this.data=res.data.data
                })
        },
        getCategoryDataToEdit(id,title){
            this.toEdit=id
            this.title=title
        },
        categoryToEdit(id){
            return this.toEdit===id
        },
        update(id){
            this.toEdit=null
            api.patch(`/api/auth/admin/category/${id}`,{title:this.title})
                .then(res=>{
                    this.getCategories()
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
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: calc(24px + (100vw / 1280));
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.14em;
}
.categoryTable {
    width: 70%;
    min-width: 400px;
    margin-bottom: 20px;
    background: #F1F1F1;
    border: 3px solid #323232;
    box-shadow: 5px -4px 10px rgba(0, 0, 0, 0.25);
    border-collapse: collapse;
}
.categoryTable td {
    border: 3px solid #323232;
    padding: 5px;
}
.firstConTable{
    width: 10%;
}
.secConTable{
    width: 57%;
}
.categoryTable thead{
    background: #4D4D4D;
    color: #FFFFFF;
}
.logoTable{
    display: flex;
    justify-content: center;
    gap: 46%;
    padding-bottom: 7px;
}
.tableLogo{
    width: 16px;
    height: 20px;
    color:red;
}
@media only screen and (max-width:500px) {
    .categoryTable{
        font-size: 15px;
        min-width: 350px;
    }
}
</style>
