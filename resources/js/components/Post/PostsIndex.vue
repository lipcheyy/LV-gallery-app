<template>
    <div class="main-container">
        <div class="wrapper">
            <post-layout Likes="1"></post-layout>
            <post-layout Likes="2"></post-layout>
            <post-layout Likes="3"></post-layout>
        </div>
        <div class="pagination-container">
            <div href="" class="pagination-btn closed control"><<</div>
            <div href="" class="pagination-btn closed control"><</div>
            <div href="" class="pagination-btn active">1</div>
            <div href="" class="pagination-btn">2</div>
            <div href="" class="pagination-btn">3</div>
            <div href="" class="pagination-btn control">></div>
            <div href="" class="pagination-btn control">>></div>

        </div>
    </div>
</template>

<script>
import PostLayout from "./PostLayout";
export default {
    name: "PostsIndex",
    components: {PostLayout}
}

</script>

<style scoped>
.main-container {
    margin-top: 10px;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 7.8vw;
    row-gap: 2vh;
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

.pagination-btn {
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
