<template>
    <div class="main-container">
        <h1>Змінити дані користувача</h1>
        <div class="wrapper">
            <div ref="dropzone" class="dropzone_form">
                <i class="fa-solid fa-pencil"></i>
                <p>Змінити аватар</p>
            </div>
            <div class="change-inputs">
                <p class="title">Ім'я</p>
                <input type="text" placeholder="ім'я" class="form-control">
                <p class="title">Пароль</p>
                <input type="password" placeholder="*******" class="form-control">
                <p class="title">Повторіть пароль</p>
                <input type="password" placeholder="*******" class="form-control">
            </div>

            <button class="control" type="submit">Внести зміни</button>
        </div>

    </div>
</template>

<script>
import Dropzone from 'dropzone'
export default {
    name: "ChangeData"
}
</script>

<style scoped>
h1,h2,h3, p {
    margin: 0;
    padding: 0;
}
.main-container {
    margin: 0 auto;
    width: 60%;
    border-radius: 14px;
    margin: 0 auto;
    display: flex;
    background: #D9D9D9;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
    padding: 15px;
    flex-direction: column;
    align-items: center;
}
i {
    font-size: 32px;
}
.dropzone_form {
    width: 200px;
    height: 200px;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    flex-display: column;
    justify-content: center;
    align-items: center;
    outline: 2px dashed #D9D9D9;
    outline-offset: -25px;
}
.wrapper {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 10px;
}

.control {
    border: 0;
    height: 40px;
    width: 200px;
    margin: auto 0;
    background: #B00000;
    border: none;
    color: white;
    transition: all 0.5s ease;
    animation: glowing 0.5s infinite;
}

.control:hover {
    transform: scale(1.09);
}

@keyframes glowing {
    0% { box-shadow: 0 0 5px #B00000; }
    50% { box-shadow: 0 0 12px #800e0e; }
    100% { box-shadow: 0 0 3px #B00000; }
}
</style>
