<template>
    <div>
        <p>category main page</p>

        <create-component ref="test"></create-component>

        <table class="table w-25">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th colspan="2">actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="category in data">
                    <tr :class="categoryToEdit(category.id)?'d-none':''">
                        <td>{{category.id}}</td>
                        <td>{{category.title}}</td>
                        <td><a href="#" @click.prevent="getCategoryIdToEdit(category.id)">edit</a></td>
                        <td><a href="#">delete</a></td>
                    </tr>
<!--                    editing fields-->
                    <tr :class="categoryToEdit(category.id)?'':'d-none'">
                        <td>{{category.id}}</td>
                        <td><input type="text" class="form-control" :value="category.title"></td>
                        <td><a href="#" @click.prevent="getCategoryIdToEdit(null)">update</a></td>
                    </tr>
                </template>
            </tbody>
        </table>
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
        getCategoryIdToEdit(id){
            this.toEdit=id
        },
        categoryToEdit(id){
            return this.toEdit===id
        }
    }
}
</script>

<style scoped>

</style>
