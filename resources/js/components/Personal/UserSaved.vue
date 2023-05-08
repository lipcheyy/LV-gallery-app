<template>
<div>
    saved
</div>
</template>

<script>
export default {
    name: "UserSaved",
    mounted() {
        this.$Progress.start()
        setTimeout(()=>{
            this.$Progress.finish()
        },350)
    }
}
</script>

<style scoped>

</style>
