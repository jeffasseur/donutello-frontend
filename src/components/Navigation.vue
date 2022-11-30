<template>
    <nav>
        <div class="nav__logo">
            <a href="/">
                <img src="/images/donuttello-logo.webp" alt="Logo Donuttello">
            </a>
        </div>
        <a class="nav__login" href="/login">
            <img src="/images/account.svg" alt="Account icon">
        </a>
    </nav>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

nav {
    background: $strawberry;
    border-bottom: 10px solid $white;
    padding: .5rem 3rem;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100vw - 6rem);
    display: flex;
    justify-content: flex-end;
}
.nav__logo {
    position: absolute;
    top: 2rem;
    left: 3rem;
}
.nav__login {
    display: inline-flex;
    padding: 1.5rem;
}

@media screen and (min-width: 1200px) {
    nav {
        padding-left: 6rem;
        padding-right: 6rem;
        width: calc(100vw - 12rem);
    }
    .nav__logo {
        left: 6rem;
    }
}
</style>