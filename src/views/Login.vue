<script setup>
    import { ref } from 'vue'
    import Nav from './../components/Navigation.vue'
    import Button from './../components/Button.vue'

    const email = ref('')
    const password = ref('')
    let error = ref(false)

    const login = (e) => {
        if (!email.value) {
            error.value = 'Please enter your email'
            return error
        }
        if (!password.value) {
            error.value = 'Please enter your password'
            return error
        }
        // Send login request to server
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email.value,
                "password": password.value
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    console.log(data.status)
                    // Store token in local storage
                    localStorage.setItem('token', data.token)
                    // Redirect to dashboard
                    window.location.href = '/dashboard'
                } else {
                    error.value = data.message
                    console.log(error)
                    return error
                }
            })
    }
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
                <a href="login/change-password" class="password__forgot">Wachtwoord vergeten?</a>
            </div>
            <div class="login__error alert alert--danger" v-if="error">
                <span class="login__error__icon material-icons-outlined">error_outline</span>
                <p class="login__error__message">{{ error }}</p>
            </div>
            <div class="form-group">
                <Button text="Inloggen" class="btn btn--strawberry" type="submit" />
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.login {
    padding: 0 3rem;
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
}
.form-group input {
    font-size: 1em;
    padding: .5em;
    border: none;
    outline: none;
    border-bottom: 2px solid $strawberry;
    border-radius: 0 !important;
    transition: all .1s ease-in;
}
.form-group input:focus {
    outline: none;
    border-top: 2px solid $strawberry;
    border-left: 2px solid $strawberry;
    border-right: 2px solid $strawberry;
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

@media screen and (min-width: 768px) {
    .login {
        padding-left: 25%;
        padding-right: 25%;
    }
}
</style>