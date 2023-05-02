Чому like_container не переміщається в ліво, а save_container вправо
<template>
        <div class="main-container">
            <div class="img-container">
                <img class="img" :src="url">
            </div>
            <div class="buttons-container">
                <div class="like_container">
                    <a href="" @click.prevent="store" class="likes">
                        <i class="far fa-heart"></i>
                    </a>
                    <!--                <a href="" @click.prevent="store" class="likes active">-->
                    <!--                    <i class="fas fa-heart"></i>-->
                    <!--                </a>-->
                    <span class="count_likes">100<span></span> позначок "Подобається"</span>
                </div>
                <div class="save_container">
                    <a href="" @click.prevent="store" class="save">
                        <i class="far fa-bookmark"></i>
                    </a>
                    <!--                <a href="" @click.prevent="store" class="save active">-->
                    <!--                    <i class="fas fa-bookmark"></i>-->
                    <!--                </a>-->
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
.buttons-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.like_container{
    display: flex;
    align-items: center;
    order: 1;
    margin-left: 10px;
}
.save_container{
    display: flex;
    align-items: center;
    order: 2;
    margin-right: 17px;
}
i{
    font-size: 35px;
    color: #000000;
}
.count_likes{
    padding-left: 11px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
}


</style>
