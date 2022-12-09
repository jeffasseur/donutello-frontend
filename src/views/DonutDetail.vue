<script setup>
import { onMounted, reactive, ref } from 'vue'
import Nav from './../components/Navigation.vue'
import Btn from './../components/Button.vue'

const donutId = ref(window.location.pathname.split('/')[4])
const donut = reactive( { 'donut': {} } )

onMounted( () => {
    const donutId = window.location.pathname.split('/')[4];
    const url = `https://donutello-backend-n95w.onrender.com/api/v1/donuts/${donutId}`
    // console.log(donutId)
    fetch( url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    } )
    .then( res => res.json() )
    .then( data => {
        donut.donut = data.data
        console.log(donut.donut)
    })
    .catch( err => {
        // console.log(err)
        window.location.href = '/login'
    })
})

const pending = async () => {
    console.log('pending')

}

const production = async () => {
    console.log('production')
}

const done = async () => {
    console.log('done')
}

const deleteDonut = async () => {
    const url = 'https://donutello-backend-n95w.onrender.com/api/v1/donuts/'
    await fetch( url + donutId.value, {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
    .then( res => res.json() )
    .then( data => {
        console.log(data)
        window.location.href = '/dashboard'
    })
}
</script>

<template>
    <Nav />
    <h2 class="donut__header">{{ donut.donut.name }}</h2>
    <div class="details">
        <div class="details__top" v-if="donut.donut.order">
            <p>Aantal: {{ donut.donut.amount }}</p>
            <p class="btn btn--lemon btn--small">Status: {{ donut.donut.status }}</p>
        </div>
        <div class="details__customer">
            <h3>Details klant:</h3>
            <table>
                <tr>
                    <th>Klant</th>
                    <td>{{ donut.donut.client }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ donut.donut.email }}</td>
                </tr>
            </table>
            <!-- <p>Klant: {{ donut.donut.client }}</p>
            <p>Email: {{ donut.donut.email }}</p>
            <p :v-if="donut.donut.description != null">Beschrijving: {{ donut.donut.description }}</p> -->
        </div>
        <div class="details__donut">
            <h3>Details donut:</h3>
            <table>
                <tr>
                    <th>Deeg</th>
                    <td>{{ donut.donut.dough }}</td>
                </tr>
                <tr>
                    <th>Glazuur</th>
                    <td>{{ donut.donut.glase }}</td>
                </tr>
                <tr>
                    <th>Sprinkels</th>
                    <td>{{ donut.donut.sprinkles }}</td>
                </tr>
                <tr>
                    <th>Logo</th>
                    <td>
                        <a :href="donut.donut.logo">Link naar logo</a>
                    </td>
                </tr>
                <tr>
                    <th>Opmerkingen</th>
                    <td>{{ donut.donut.description }}</td>
                </tr>
            </table>
            <!-- <p>Deeg: {{ donut.donut.dough }}</p>
            <p>Glazuur: {{ donut.donut.glase }}</p>
            <p>Sprinkels: {{ donut.donut.sprinkles }}</p> -->
        </div>
        <div class="details__changeStatus">
            <h3>Wijzig status:</h3>
            <div v-if="donut.donut.order" class="details__changeStatus__btns">
                <div v-if="donut.donut.status == 'Wachten tot opstart ...'" class="details__changeStatus__btn--pending">
                    <Btn text="In behandeling" class="btn btn--small btn--lemon" type="submit" @click.prevent="pending" />
                </div>
                <div v-if="donut.donut.status == 'In behandeling'" class="details__changeStatus__btn--production">
                    <Btn text="In productie" class="btn btn--small btn--lemon" type="submit" @click.prevent="production" />
                </div>
                <div v-if="donut.donut.status == 'In productie'" class="details__changeStatus__btn--done">
                    <Btn text="Klaar" class="btn btn--small btn--lemon" type="submit" @click.prevent="done" />
                </div>
            </div>
            <Btn text="Verwijder" class="btn btn--small btn--strawberry" type="submit" @click.prevent="deleteDonut" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.donut__header {
    padding: 9rem 2rem 4rem 2rem;
    background: $lemon;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.details {
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem 2rem;
    gap: 2rem;
}
.details__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 2rem;
}
table {
    width: 100%;
}
table th, table td {
    text-align: left;
    padding: .5rem 0;
}
table th {
    width: 35%;
}
.details__changeStatus__btns {
    margin-bottom: 1.5rem;
}
</style>