<template>
    <div class="row">
        <div class="columns">
            <div class="column col-12">
                <h1>{{ titleComponent }}</h1>
            </div>

            <div class="column col-12">
                <slide-show :images="imagesArray"/>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import SlideShow from "../components/Slide/SlideShow";

    export default {
        name: "slide-container",
        data() {
            return {
                imagesArray: []
            };
        },
        props: {
            titleComponent: String,
            endpoint: String
        },
        components: {
            SlideShow
        },
        created() {
            axios.get(this.endpoint)
                .then(res => {
                    this.imagesArray = res.data;
                })
                .catch(error => {
                    console.log("Error Axios GET: ", error);
                })
        }
    }
</script>
