<script setup>
    const openMenu = () => {
        document.querySelector('.nav--mobile').style = 'top: 4.85rem';
        // make cross from hamburger
        document.querySelector('.icon--menu').style = 'display: none';
        document.querySelector('.icon--close').style = 'display: block';
    }

    const closeMenu = () => {
        document.querySelector('.nav--mobile').style = 'top: -100vh';
        // make hamburger from cross
        document.querySelector('.icon--menu').style = 'display: block';
        document.querySelector('.icon--close').style = 'display: none';
    }
</script>

<template>
    <nav>
        <div class="nav__logo">
            <a href="/">
                <img src="/images/donuttello-logo.webp" alt="Logo Donuttello">
            </a>
        </div>
        <div class="nav__menu">
            <a href="/">Home</a>
            <a href="https://the-donut-generator-rix11-h.vercel.com">Configurator</a>
            <a href="/dashboard">Dashboard</a>
        </div>
        <a class="nav__hamburger">
            <span class="material-icons-round icon--menu" @click="openMenu">menu</span>
            <span class="material-icons-round icon--close" @click="closeMenu">close</span>
        </a>
        <a class="nav__login" href="/login">
            <img src="/images/account.svg" alt="Account icon">
        </a>
    </nav>

    <div class="nav--mobile">
        <div class="nav__menu--mobile">
            <a href="/">Home</a>
            <a href="https://the-donut-generator-rix11-h.vercel.com">Configurator</a>
            <a href="/dashboard">Dashboard</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

/* MOBILE MENU */
.nav--mobile {
    background: $strawberry;
    position: absolute;
    top: -100vh;
    left: 0;
    width: calc(100% - 4rem);
    padding: 2rem;
    z-index: 5;
    transition: all 0.5s ease-in-out;
}
.nav__menu--mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5em;
    color: $white;
}
.material-icons-round {
    cursor: pointer;
    color: $lemon;
    transition: all .3s ease-in-out;
}
.icon--close {
    display: none;
}
/* END MOBILE MENU */

nav {
    background: $strawberry;
    // border-bottom: 10px solid $white;
    padding: .5rem 3rem;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100vw - 6rem);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 10;
}
.nav__logo {
    position: absolute;
    top: 2rem;
    left: 3rem;
}
.nav__menu {
    display: none;
}
.nav__menu a, .nav__menu--mobile a {
    color: $white;
    font-weight: 600;
    text-transform: uppercase;
    transition: all .3s ease-in-out;
}
.nav__menu a:hover {
    color: $lemon;
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
        gap: 2rem;
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