<script setup>
import Nav from './../components/Navigation.vue'
</script>

<template>
    <Nav />
    <div class="login">
        <form name="form-login" @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="password" />
                <a href="#" class="password__forgot">Wachtwoord vergeten?</a>
            </div>
            <div class="form-group">
                <button class="btn btn--strawberry" type="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.login {
    padding: 0 3rem;;
}
form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: .5em;
}
.form-group label {
    display: inline-flex;
    width: fit-content;
    padding: .2em .6em;
    background-color: $lemon;
    color: $strawberry;
    border-radius: 50px;
}
.form-group input {
    font-size: 16px;
    padding: .5em;
    border: 1px solid $strawberry;
    border-radius: 5px;
    transition: all .3s ease-in-out;
}
.form-group input:focus {
    outline: 2px solid $lemon;
    border: $lemon;
}
.form-group button:hover {
    outline: none;
}
.password__forgot {
    color: $pastelPink;
    font-size: 12px;
    transition: all .3s ease-in-out;
}
.password__forgot:hover {
    color: $strawberry;
}
</style>