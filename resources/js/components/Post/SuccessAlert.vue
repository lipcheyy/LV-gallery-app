<template>
    <div v-if="show" class="alert alert-success custom-alert" :class="{ 'leave': !show }">
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

<style scoped>
.custom-alert {
    position: fixed;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    animation: fade-in 0.3s ease-out forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
        top: -100%;
    }
    to {
        opacity: 1;
        top: 10px;
    }
}

.custom-alert.leave {
    animation: fade-out 0.3s ease-out forwards;
}

@keyframes fade-out {
    from {
        opacity: 1;
        top: 10px;
    }
    to {
        opacity: 0;
        top: -100%;
    }
}

</style>
