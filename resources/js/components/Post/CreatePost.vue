<template>
    <div class="dropzone_container">
        <div ref="dropzone" class="dropzone_form bg-info btn">
            dropzone
        </div>
        <input v-model="title" type="text" name="" class="form-control"  id="" placeholder="title">
        <input @click.prevent="store" type="submit" value="create">
    </div>
</template>

<script>
import Dropzone from 'dropzone'
import api from "../../api";
export default {
    name: "CreatePost",
    data(){
        return{
            dropzone:null,
            title:null
        }
    },
    mounted() {
        this.dropzone=new Dropzone(this.$refs.dropzone,{
            url:'test',
            autoProcessQueue:false
        })
    },
    methods:{
        store(){
            const data=new FormData
            const files=this.dropzone.getAcceptedFiles()
            files.forEach(file=>{
                data.append('images[]',file)
            })
            api.post('/api/auth/posts',data)
                .then(res=>{
                    console.log(res);
                })
        }
    }
}
</script>

<style scoped>
    .dropzone_container{
        width: 150px;
        height: 120px;
    }
    .dropzone_form{
        padding: 10px;
    }
</style>
