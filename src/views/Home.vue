<script setup>
// import navigation
import Navigation from './../components/Navigation.vue'
</script>

<template>
    <Navigation />
    <header>
        <h1 class="header__title">Donuts op maat voor jouw bedrijf</h1>
        <p class="header__p">
            Maak hier jouw donuts in de
            huisstijl van jouw bedrijf 
            of organisatie in onze nieuwe 3D
            configurator
        </p>
        <a href="#" class="header__btn btn btn--lemon">Maak je eigen donut</a>
    </header>
    <section class="stappenplan">
        <h2>Maak je donut in <span>6 stappen</span></h2>
        <ol>
            <li>Kies je <span>glazuur</span></li>
            <li>Selecteer je <span>topping</span></li>
            <li>Upload je  <span>logo</span></li>
            <li>Vul je <span>email adres</span> in</li>
            <li><span>Bestel</span> je donuts</li>
            <li><span>Deel</span> jouw <span>3D donut</span></li>
        </ol>
        <a href="#" class="btn btn--strawberry">Start hier</a>
    </section>
    <section class="clients">
        <h2>Tevreden klanten</h2>
        <div class="clients__carousel">
            <img src="/images/nike.webp" alt="Logo Nike" class="clients__carousel__img">
            <img src="/images/telenet.webp" alt="Logo Telenet" class="clients__carousel__img">
            <img src="/images/flair.webp" alt="Logo Flair" class="clients__carousel__img">
            <img src="/images/kdg.webp" alt="Logo KDG" class="clients__carousel__img">
            <img src="/images/estee-lauder.webp" alt="Logo Estee Lauder" class="clients__carousel__img">
            <img src="/images/vtm.webp" alt="Logo VTM" class="clients__carousel__img">
            <img src="/images/levis.webp" alt="Logo Levi's" class="clients__carousel__img">
            <img src="/images/bolcom.webp" alt="Logo Bol.com" class="clients__carousel__img">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

header {
    padding: 4.5rem 3rem 2rem 3rem;
    height: calc(100vh - 6.5rem);
    background: linear-gradient(180deg, rgba(231,44,112,0.5) 0%, rgba(130,209,228,0.65) 100%), url('/images/donut-bg.webp');
    background-size: cover;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}
.header__title {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
}
.header__p {
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
}
section {
    padding: 2rem 3rem;
}
.stappenplan {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
span {
    color: $strawberry;
}
ol {
    text-align: left;
}
li {
    font-weight: 600;
    text-transform: uppercase;
}
.clients {
    background: $strawberry;
}
.clients h2 {
    color: #FFF;
}
.clients__carousel {
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    align-items: center;
    margin-right: -3rem;
}
.clients__carousel img {
    width: 78px;
    aspect-ratio: 1/1;
    object-fit: contain;
}
.clients__carousel img:last-child {
    margin-right: 3rem;
}
</style>