<template>
    <div class="main-container">
        <div class="posts-container">
            <div class="post-container" v-for="post in posts">
                <template v-for="image in post.images">
                    <post-layout :url="image.url" :id="post.id"></post-layout>
                </template>
            </div>
        </div>

        <ul class="pagination-container">
            <li v-if="pagination.current_page!==1"
                 @click.prevent="getPosts(pagination.current_page-1)" class="closed control">&lt;</li>
            <li
                @click.prevent="getPosts(link.label)"
                :class="link.active ? 'active' : ''"
                v-for="link in pagination.links"
                v-if="Number(link.label)">
                <template v-if="Number(link.label)
                     &&(pagination.current_page-link.label <2
                     && pagination.current_page-link.label>-2)
                     || Number(link.label)===1
                     || Number(link.label)===pagination.last_page">
                    <a href="#" >{{link.label}} </a>
                </template>
                <template v-if="Number(link.label)
                    && pagination.current_page!==3
                    &&(pagination.current_page-link.label===2)
                    ||Number(link.label) &&
                    pagination.current_page!==pagination.last_page-2
                    &&(pagination.current_page-link.label===-2)">
                    <a href="#">...</a>
                </template>
            </li>
            <li @click.prevent="getPosts(pagination.current_page+1)"
                 v-if="pagination.current_page !== pagination.last_page" class="pagination-btn control">
                &gt;
            </li>
        </ul>

    </div>
</template>

<script>
import PostLayout from "./PostLayout";
import api from "../../api";
export default {
    name: "PostsIndex",
    components: {PostLayout},
    data(){
        return{
            posts:null,
            pagination:[]
        }
    },
    mounted() {
        this.getPosts()
    },
    methods:{
        getPosts(page=1){
            api.post('/api/auth/posts/list',{page:page})
                .then(res=>{
                    this.posts=res.data.data
                    this.pagination=res.data.meta
                    console.log(res);
                    // console.log(this.posts);
                })
        }
    }
}

</script>

<style scoped>
.main-container {
    margin-top: 10px;
}
.posts-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.pagination-container {
    margin: 0 auto;
    margin-top: 62px;
    width: 34.505208333333336vw;
    height: 6.925vh;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
}

a{
    text-decoration: none;
    color: black;
}
li {
    width: 3.2552083333333335vw;
    height: 6.925207756232687vh;
    border-radius: 50%;
    border: 0.13850415512465375vh solid #B00000;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Times New Roman', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 4.43213296398892vh;
    line-height: 37px;

    cursor: pointer;

}
.active {
    background-color: #B00000;
    color: white
}

.closed {
    border: 2px solid #BBBBBB;
    color: #BBBBBB;
}

.control {
    font-size: 16px;
}

</style>
