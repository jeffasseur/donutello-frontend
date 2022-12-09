<script setup>
    import { ref } from 'vue'
    import Nav from '../components/Navigation.vue'
    import Button from '../components/Button.vue'

    const username = ref('')
    const oldPassword = ref('')
    const newPassword = ref('')
    const repeatNewPassword = ref('')
    let error = ref(false)

    const changePassword = (e) => {
        if (!username.value) {
            error.value = 'Vul je gebruikersnaam in'
            return error
        }
        // Send login request to server
        fetch('https://donutello-backend-n95w.onrender.com/users/changePassword', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username.value,
                "passwordOld": oldPassword.value,
                "passwordNew1": newPassword.value,
                "passwordNew2": repeatNewPassword.value
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data === 'User is updated') {
                    console.log(data.status)
                    // Store token in local storage
                    localStorage.setItem('token', data.token)
                    // Redirect to login
                    window.location.href = '/login'
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
    <div class="change-password">
        <form name="form-password" @submit.prevent="changePassword">
            <div class="form-group">
                <label for="username">Gebruikersnaam</label>
                <input type="text" name="username" id="username" v-model="username" />
            </div>
            <div class="form-group">
                <label for="password">Oud wachtwoord</label>
                <input type="password" name="Oldpassword" id="oldPassword" v-model="oldPassword" />
            </div>
            <div class="form-group">
                <label for="password">Nieuw wachtwoord</label>
                <input type="password" name="password" id="password" v-model="newPassword" />
            </div>
            <div class="form-group">
                <label for="password">Herhaal nieuw wachtwoord</label>
                <input type="password" name="password" id="password" v-model="repeatNewPassword" />
            </div>
            <div class="login__error alert alert--danger" v-if="error">
                <span class="login__error__icon material-icons-outlined">error_outline</span>
                <p class="login__error__message">{{ error }}</p>
            </div>
            <div class="form-group">
                <Button text="Pas wachtwoord aan" class="btn btn--strawberry" type="submit" />
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.change-password {
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

@media screen and (min-width: 768px) {
    .change-password {
        padding-left: 25%;
        padding-right: 25%;
    }
}
</style>