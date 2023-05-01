<template>
    <div>
        <div class="main-container">
            <div class="img-container">
                <img class="img" :src="url">
            </div>
            <div class="buttons-container">
                <a href="" @click.prevent="store" class="likes active"><img src="./Images/Like.png" alt="Like"></a>
                <a href="" class="save active"><img src="./Images/Save.png" alt="Save"></a>
            </div>

        </div>
    </div>
</template>

<script>
import api from "../../api";

export default {
    name: "PostLayout",
    props: ['Likes','url','title','id'],
    data(){
        return{
            posts:null
        }
    },
    mounted() {
    },
    methods:{
        store(){
            api.post(`/api/auth/posts/${this.id}/likes`)
        }
    }
}
</script>

<style scoped>
.main-container {
    height: 78vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img-container {
    width: 100%;
    height: 90%;
    margin-bottom: 7px;
}
.img-container > .img {
    width: 100%;
    height: 100%;
}

.buttons-container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}


</style>
