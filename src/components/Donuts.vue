<script setup>
    import { reactive, onMounted } from 'vue'
    
    let donuts = reactive( {donuts: []} )

    onMounted ( () => {
        let donutUrl = 'https://donutello-backend-n95w.onrender.com/api/v1/donuts'
        fetch( donutUrl, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
            }
        } )
        .then( res => res.json() )
        .then ( data => {
            console.log(data)
            donuts.donuts = data.data
        })
        .catch( window.location.href = '/login')
    })

</script>

<template>
    <h2>Donut bestellingen</h2>
    <div class="donuts">
        <a class="donut card" v-for="donut in donuts.donuts" :key="donut._id" :href="('/dashboard/donut/id/' + donut._id)" >
            <div class="card__color">
                <img class="card__color__logo" v-if="(donut.logo != null)" :src="donut.logo" alt="Logo">
            </div>
            <h3>{{ donut.name }}</h3>
            <p v-if="donut.order">Aantal: <strong>{{ donut.amount }}</strong></p>
            <p v-if="donut.order">Status: <strong>{{ donut.status }}</strong></p>
            <p v-if="!donut.order">Aantal: <strong>Geen bestelling</strong></p>
        </a>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.donuts {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
}

@media screen and (min-width: 500px) {
    .donuts {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (min-width: 768px) {
    .donuts {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (min-width: 1024px) {
    .donuts {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
