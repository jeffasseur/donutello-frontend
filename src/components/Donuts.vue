<script setup>
    import { reactive, onMounted } from 'vue'
    
    let donuts = reactive( {donuts: []} )

    onMounted ( () => {
        let donutUrl = 'http://localhost:3000/api/v1/donuts'
        fetch( donutUrl )
        .then( res => res.json() )
        .then ( data => {
            console.log(data)
            donuts.donuts = data.data
        })
    })

</script>

<template>
    <div class="donuts">
        <div class="donut card" v-for="donut in donuts.donuts" :key="donut._id">
            <div class="card__color">
                <img class="card__color__logo" v-if="(donut.logo != null)" :src="donut.logo" alt="Logo">
            </div>
            <p>{{ donut._id }}</p>
            <p>{{ donut.name }}</p>
            <p v-if="donut.order">{{ donut.amount }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.donuts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
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
