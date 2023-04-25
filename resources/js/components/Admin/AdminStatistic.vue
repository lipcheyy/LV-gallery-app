<template>
    <div class="main-container">
        <div class="wigets-title">
            <h1 class="title inter">Віджети</h1>
            <p class="subtitle inter">
                •Сторінка попереднього перегляду•
            </p>
        </div>

        <div class="wigets-container">
            <div class="wiget">
                <p class="wiget-title inter">Кількість користувачів</p>
                <div class="data-container">
                    <p class="count inter">150</p>
                    <img class="image" src="../Includes/Images/Users.png" alt="Users">
                </div>

                <div class="btn-wrapper">
                    <router-link :to="{name:'users.index'}" class="submit-btn inter">Детальніше</router-link>
                </div>
            </div>

            <div class="wiget red">
                <p class="wiget-title inter">Кількість користувачів</p>
                <div class="data-container">
                    <p class="count inter">150</p>
                    <img class="image" src="../Includes/Images/Users.png" alt="Users">
                </div>

                <div class="btn-wrapper">
                    <router-link :to="{name:'category.index'}" class="submit-btn red inter">Детальніше</router-link>
                </div>
            </div>

            <div class="wiget yellow">
                <p class="wiget-title inter">Кількість користувачів</p>
                <div class="data-container">
                    <p class="count inter">150</p>
                    <img class="image" src="../Includes/Images/Items.png" alt="Items">
                </div>

                <div class="btn-wrapper">
                    <router-link :to="{name:'category.index'}" class="submit-btn yellow inter">Детальніше</router-link>
                </div>
            </div>

            <div class="wiget green">
                <p class="wiget-title inter">Кількість користувачів</p>
                <div class="data-container">
                    <p class="count inter">150</p>
                    <img class="image" src="../Includes/Images/Image.png" alt="Items">
                </div>

                <div class="btn-wrapper">
<!--                    <router-link :to="{name:'category.index'}" class="submit-btn green inter">Детальніше</router-link>-->
                </div>
            </div>


        </div>

    </div>
</template>

<script>
export default {
    name: "AdminStatistic"
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

p, h1 {
    margin: 0;
}

.inter {
    font-family: 'Inter';
    font-style: normal;
}

.main-container {
    width: 100%;
    height: 75vh;
    margin-top: 20px;
}

.wigets-title {
    display: flex;
    height: 7.228915662650603vh;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    margin: 0;
    font-weight: 500;
    font-size: 6.024096385542169vh;
    color: #000000;
    line-height: 7.228915662650603vh;   ;
    letter-spacing: 0.065em;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

}
.subtitle {
    font-weight: 500;
    font-size: 4.819277108433735vh;
    letter-spacing: 0.065em;
    color: #8F8F8F;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    margin: 0;
    margin-left: 10px;
}
.wigets-container {
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    justify-content: center;
    column-gap: 10px;
    margin-top: 11.295180722891565vh;
}
.wiget {
    height: 270px;
    width: 370px;
    background: #18BED5;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

 }

.wiget-title {
    margin-top: 30px;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.065em;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.data-container {
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.count {
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: 0.065em;
    color: #FFFFFF;
}

.btn-wrapper {
    height: 80px;
    background: rgba(0, 0, 0, 0.31);
    border-radius: 0px 0px 7px 7px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.submit-btn {
    background-color: #18BED5;
    border-radius: 7px;
    height: 40px;
    width: 177px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.065em;
    color: #FFFFFF;
    text-decoration: none;
}

.red {
    background: #E42020;
}

.yellow {
    background: #FFE500;
}


.green {
    background: #0DCD2C;
}

</style>
