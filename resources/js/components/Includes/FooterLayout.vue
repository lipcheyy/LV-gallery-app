<template>
    <div class="footer">
        <div class="lInfoFooter">
            <div class="logoFooter">
                <img src="./Images/logo.png" alt="FTlogo">
                <a class="textLogo" href=""><b>FATYOVE TEAM</b></a>
            </div>
            <div class="messangerFooter">
                <a href="#"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                <a href="#"><i class="fa-brands fa-facebook-f fa-2xl"></i></a>
                <a href="#"><i class="fa-brands fa-telegram fa-2xl"></i></a>
            </div>
            <a href="#" class="authorFooter">ⓒ  2023, fatyoveteam.com </a>
        </div>

        <div class="rInfoFooter">
            <span class="redTextFooter">E-MAIL:</span>
            <span>support@fatyoveteam.com</span>
            <span class="redTextFooter">ЧАС РОБОТИ СЛУЖБИ ПІДТРИМКИ:</span>
            <span>ПН-ПТ: 9:00-22:00</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterLayout"
}
</script>

<style scoped>


a{
    outline: none;
    text-decoration: none;
}
@import url('https://fonts.googleapis.com/css2?family=Petrona:ital@1&family=Play:wght@400;700&family=Poly&family=Poppins:wght@300&display=swap');

.footer{
    height: 228px;
    background: #D9D9D9;
    box-shadow: 0px -15px 36px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 43%;
}

.lInfoFooter{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    gap: 35px;
}
.logoFooter img{
    width: 55px;
}
.logoFooter{
    display: flex;
    align-items: center;
    gap: 14px;
}
.textLogo{
    font-family: 'Poly', serif;
    font-size: calc(20px + (100vw / 1280));
    line-height: 24px;
    letter-spacing: 0.065em;
    color: #000000;
}
.authorFooter{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: calc(21px + (100vw / 1280));
    line-height: 32px;

    letter-spacing: 0.065em;
    color: #000000;
}
.messangerFooter{
    display: flex;
    gap: 50px;
}
.messangerFooter a{
    width: 25px;
    color: #000000;
}
.rInfoFooter{
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    gap: 23px;
    font-family: 'Poly', serif;
    font-style: normal;
    font-weight: 400;
    font-size: calc(20px + (100vw / 1280));
    line-height: 23px;
    text-align: right;
    letter-spacing: 0.065em;
    color: #000000;
}
.redTextFooter{
    color: #B00000;
}
.petronaFont{
    font-family: 'Petrona', serif;
}


@media only screen and (max-width:800px) {
    .footer{
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: auto;
        align-items: center;
    }
    .lInfoFooter,
    .rInfoFooter{
        margin: 10px 5px;
        text-align: center;
        align-items: center;
        text-align:center;
    }
}
</style>
