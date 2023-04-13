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
                    <tr>
                        <td>{{category.id}}</td>
                        <td>{{category.title}}</td>
                        <td><a href="#">edit</a></td>
                        <td><a href="#">delete</a></td>
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
            data: null
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
    }
}
</script>

<style scoped>

</style>
