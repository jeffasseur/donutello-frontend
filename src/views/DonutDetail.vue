<script setup>
import { onMounted, reactive, ref } from "vue";
import Nav from "./../components/Navigation.vue";
import Btn from "./../components/Button.vue";

let fetchUrl = "https://donutello-backend-n95w.onrender.com/api/v1/donuts/";
let newFetchUrl = "https://donuttello.cyclic.app/api/v1/donuts/";
const donutId = ref(window.location.pathname.split("/")[3]);

const donuts = reactive({ donut: {} });
const donutStatus = ref("");

const Id = window.location.pathname.split("/")[3];
console.log(donutId);
fetch(newFetchUrl + Id, {
  method: "GET",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
})
  .then((res) => res.json())
  .then((data) => {
    donuts.donut = data.data;
    donutStatus.value = data.data.status;
    console.log(donuts.donut);
  });
// onMounted(() => {
// });

const waiting = async () => {
  console.log("Wachten tot opstart ...");
  await fetch(newFetchUrl + donutId.value, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    mode: "cors",
    body: JSON.stringify({
      status: "Wachten tot opstart ...",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data.status);
      donuts.donut = data.data;
      donutStatus.value = data.data.status;
    });
};

const pending = async () => {
  console.log("pending");
  await fetch(newFetchUrl + donutId.value, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    mode: "cors",
    body: JSON.stringify({
      status: "In behandeling",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      donuts.donut = data.data;
      donutStatus.value = data.data.status;
    });
};

const production = async () => {
  console.log("production");
  fetch(newFetchUrl + donutId.value, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    mode: "cors",
    body: JSON.stringify({
      status: "In productie",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      donuts.donut = data.data;
      donutStatus.value = data.data.status;
    });
};

const done = async () => {
  console.log("done");
  fetch(newFetchUrl + donutId.value, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    mode: "cors",
    body: JSON.stringify({
      status: "Klaar",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      donuts.donut = data.data;
      donutStatus.value = data.data.status;
    });
};

const deleteDonut = async () => {
  await fetch(newFetchUrl + donutId.value, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      window.location.href = "/dashboard";
    });
};
</script>

<template>
  <Nav />
  <h2 v-if="donuts.donut === undefined" class="donut__header">
    {{ donuts.donut.client.name }}
  </h2>
  <div v-if="Object.keys(donuts.donut).length > 1" class="details">
    <div class="details__top" v-if="donuts.donut.order">
      <p>Aantal: {{ donuts.donut.order.amount }}</p>
      <p class="btn btn--lemon btn--small">Status: {{ donutStatus }}</p>
    </div>
    <div class="details__customer">
      <h3>Details klant:</h3>
      <table>
        <tr>
          <th>Klant</th>
          <td>{{ donuts.donut.client.name }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ donuts.donut.client.email }}</td>
        </tr>
      </table>
    </div>
    <div class="details__donut">
      <h3>Details donut:</h3>
      <table>
        <tr>
          <th>Deeg</th>
          <td>{{ donuts.donut.donut.dough }}</td>
        </tr>
        <tr>
          <th>Glazuur</th>
          <td>{{ donuts.donut.donut.icing }}</td>
        </tr>
        <tr>
          <th>Sprinkels</th>
          <td>{{ donuts.donut.donut.topping }}</td>
        </tr>
        <tr>
          <th>Logo</th>
          <td>
            <a :href="donuts.donut.donut.logo" target="_blank" download="true"
              >Link naar logo</a
            >
          </td>
        </tr>
        <tr>
          <th>Opmerkingen</th>
          <td>{{ donuts.donut.description }}</td>
        </tr>
      </table>
    </div>
    <div class="details__changeStatus">
      <h3>Wijzig status:</h3>
      <div v-if="donuts.donut.order" class="details__changeStatus__btns">
        <div
          :v-if="donuts.donut.status === null || undefined || 'created' || 'niet klaar'"
          class="details__changeStatus__btn--waiting"
        >
          <Btn
            text="Wachten tot opstart ..."
            class="btn btn--small btn--lemon"
            type="submit"
            @click.prevent="waiting"
          />
        </div>
        <div
          :v-if="
            donuts.donut.status === 'Wachten tot opstart ...' || 'wachten tot opstart ...'
          "
          class="details__changeStatus__btn--pending"
        >
          <Btn
            text="In behandeling"
            class="btn btn--small btn--lemon"
            type="submit"
            @click.prevent="pending"
          />
        </div>
        <div
          :v-if="donuts.donut.status === 'In behandeling'"
          class="details__changeStatus__btn--production"
        >
          <Btn
            text="In productie"
            class="btn btn--small btn--lemon"
            type="submit"
            @click.prevent="production"
          />
        </div>
        <div
          :v-if="donuts.donut.status === 'In productie'"
          class="details__changeStatus__btn--done"
        >
          <Btn
            text="Klaar"
            class="btn btn--small btn--lemon"
            type="submit"
            @click.prevent="done"
          />
        </div>
      </div>
      <Btn
        text="Verwijder"
        class="btn btn--small btn--strawberry"
        type="submit"
        @click.prevent="deleteDonut"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../sass/app.scss";

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
table th,
table td {
  text-align: left;
  padding: 0.5rem 0;
}
table th {
  width: 35%;
}
.details__changeStatus__btns {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .details {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  .details__changeStatus__btns {
    flex-direction: row;
  }
}
</style>
