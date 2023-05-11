<template>

</template>

<script>
import api from "../../api";

export default {
    name: "PostByCategory",
    mounted() {
        this.getPosts()
    },
    methods:{
        getPosts(){
            api.get(`/api/auth/posts/${this.$route.params.id}/posts`)
                .then(res=>{
                    console.log(res.data.data);
                })
        }
    }
}
</script>

<style scoped>

</style>
