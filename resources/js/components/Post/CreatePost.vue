<template>
    <div class="dropzone_container">
        <div ref="dropzone" class="bg-info p-5">
            dropzone
        </div>
    </div>
</template>

<script>
import Dropzone from 'dropzone'
export default {
    name: "CreatePost",
    data(){
        return{
            dropzone:null
        }
    },
    mounted() {
        this.dropzone=new Dropzone(this.$refs.dropzone,{
            url:'#'
        })
    }
}
</script>

<style scoped>
    .dropzone_container{
        width: 150px;
        height: 120px;
    }
</style>
