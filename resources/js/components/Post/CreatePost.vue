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
        <div v-if="post">
            <p>{{post.title}}</p>
            <div v-for="image in post.images">
                <img  :src="image.preview_url" alt="">
                <img  :src="image.url" alt="">
            </div>

        </div>
        <div>{{response}}</div>
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
            category_id:1,
            response:null,
            post:null
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
    width: 150px;
    height: 120px;
}

.dropzone_form {
    padding: 10px;
}
</style>
