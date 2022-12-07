<script setup>
    import { ref } from 'vue'
    import Nav from '../components/Navigation.vue'
    import Button from '../components/Button.vue'

    const oldPassword = ref('')
    const newPassword = ref('')
    const repeatNewPassword = ref('')
    let error = ref(false)

    const forgotPassword = (e) => {
        if (!email.value) {
            error.value = 'Please enter your email'
            return error
        }
        // Send login request to server
        fetch('http://localhost:3000/users/login/changePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "oldPassword": oldPassword.value,
                "newPassword": newPassword.value,
                "repeatNewPassword": repeatNewPassword.value
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
    <div class="forgot-password">
        <form name="form-password" @submit.prevent="forgotPassword">
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

.forgot-password {
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
    .forgot-password {
        padding-left: 25%;
        padding-right: 25%;
    }
}
</style>