<template>
    <header class="navbar">
        <section class="navbar-section">
            <router-link to="/" class="navbar-brand mr-2">VUE - EDUWEB</router-link>
            <router-link to="/counter" class="btn btn-link">Licznik</router-link>
            <router-link to="/slide" class="btn btn-link">Slider</router-link>
            <router-link to="/game" class="btn btn-link">Game</router-link>
        </section>

        <section class="navbar-section">
            <div class="input-group input-inline">
                <input class="form-input" type="text" placeholder="search">
                <button class="btn btn-primary input-group-btn">Search</button>
            </div>
        </section>
    </header>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
    .navbar {
        margin: 16px 0;
    }
</style>
