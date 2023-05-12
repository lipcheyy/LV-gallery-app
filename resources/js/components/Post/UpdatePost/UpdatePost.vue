<template>
    <div>edit page</div>
</template>

<script>
import api from "../../../api";

export default {
    name: "UpdatePost",
    data() {
        return {
            postId: parseInt(this.$route.params.id),
            post: null
        }
    },
    mounted() {
        this.getPost()
    },
    methods: {
        getPost() {
            api.get(`/api/auth/posts/${this.postId}`)
                .then(res => {
                    this.post = res.data.data
                    console.log(this.post);
                })
        }
    }

}
</script>

<style scoped>

</style>
