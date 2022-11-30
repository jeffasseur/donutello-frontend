<template>
    <nav>
        <div class="nav__logo">
            <a href="/">
                <img src="/images/donuttello-logo.webp" alt="Logo Donuttello">
            </a>
        </div>
        <div class="nav__menu">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <!-- <a href="/login">Login</a> -->
        </div>
        <div class="nav__hamburger">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
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
    align-items: center;
    justify-content: flex-end;
}
.nav__logo {
    position: absolute;
    top: 2rem;
    left: 3rem;
}
.nav__menu {
    display: none;
    gap: 2rem;
}
.nav__menu a {
    color: $white;
    font-weight: 600;
    text-transform: uppercase;
    transition: all .3s ease-in-out;
}
.nav__hamburger {
    width: 1.5rem;
    aspect-ratio: 2/1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .25rem;
}
.nav__hamburger .icon-bar {
    height: 2px;
    background: #FFF;
    display: block;
}
.nav__login {
    display: inline-flex;
    padding: 1.5rem;
}

@media screen and (min-width: 768px) {
    .nav__menu {
        display: flex;
    }
    .nav__hamburger {
        display: none;
    }
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
    .nav__menu {
        display: flex;
    }
    .nav__hamburger {
        display: none;
    }
}
</style>