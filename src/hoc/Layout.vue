<template>
    <div class="container grid-lg">
        <navbar/>

        <counter-container :titleComponent="titleCounter" v-if="page === 'counter'"/>
        <slide-container :titleComponent="titleSlide" :endpoint="endpoint" v-if="page === 'slide'"/>
        <game-container :titleComponent="titleGame" v-if="page === 'game'"/>
    </div>
</template>

<script>
    import CounterContainer from "../containers/CounterContainer";
    import SlideContainer from "../containers/SlideContainer";
    import Navbar from "../components/UI/Navbar/Navbar";
    import GameContainer from "../containers/GameContainer";

    export default {
        name: "layout",
        data() {
            return {
                titleCounter: "Dynamiczny licznik",
                titleSlide: "Slider",
                titleGame: "Taktyczna gra",
                endpoint: "http://code.eduweb.pl/kurs-vue/images/?wait=1",
                page: 'counter'
            }
        },
        watch: {
            $route(toPage) {
                this.page = toPage.name;
                console.log('page watch ', this.page);
            }
        },
        components: {
            GameContainer,
            Navbar,
            CounterContainer,
            SlideContainer
        },
        created() {
            this.page = this.$route.name;
        }
    }
</script>
