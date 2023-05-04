<template>
    <div v-if="show" class="alert alert-success custom-alert">
        {{ message }}
        <button @click="close" class="btn btn-success">Закрити</button>
    </div>
</template>

<script>
export default {
    props: {
        message: String,
        duration: {
            type: Number,
            default: 5000
        }
    },
    data() {
        return {
            show: true
        };
    },
    mounted() {
        setTimeout(() => {
            this.close();
        }, this.duration);
    },
    methods: {
        close() {
            this.show = false;
            this.$emit('close');
        }
    }
};
</script>

<style>
.custom-alert {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
}
.close {
     background-color: #760c0c;
 }



</style>
