<template>
    <div class="dropzone_container">
        <div ref="dropzone" class="dropzone_form bg-info btn">
            dropzone
        </div>
        <input v-model="title" type="text" name="" class="form-control" id="" placeholder="title">
        <div class="form-group">
            choose category
            <select v-model="category_id">
                <template v-for="category in categories">
                    <option  :value="category.id">{{category.title}}</option>
                </template>
            </select>
        </div>
        <input @click.prevent="store" type="submit" value="create">
    </div>
</template>

<script>
import Dropzone from 'dropzone'
import api from "../../api";

export default {
    name: "CreatePost",
    data() {
        return {
            dropzone: null,
            title: null,
            categories: null,
            category_id:1
        }
    },

    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: 'test',
            autoProcessQueue: false,
            addRemoveLinks:true
        })
        this.getCategories()
    },
    methods: {
        store() {
            const data = new FormData
            const files = this.dropzone.getAcceptedFiles()
            files.forEach(file => {
                data.append('images[]', file)
            })
            data.append('title',this.title)
            data.append('category_id',this.category_id)
            console.log(this.category_id);
            console.log(this.title);
            api.post('/api/auth/posts', data)
                .then(res => {
                    console.log(res);
                })
        },
        getCategories() {
            api.get('/api/auth/admin/category')
                .then(res => {
                    this.categories = res.data.data
                })
        },
    },
    computed: {
        selectedStudentId() {
            return this.category_id?.id;
        }
    }
}
</script>

<style scoped>
.dropzone_container {
    width: 150px;
    height: 120px;
}

.dropzone_form {
    padding: 10px;
}
</style>
