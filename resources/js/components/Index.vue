<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>

import api from "../api";
import Header from "./Includes/HeaderMain";
export default {
    name: "Index",
    components: {Header},

}
</script>

<style scoped>

</style>
