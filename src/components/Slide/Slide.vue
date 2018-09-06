<template>
    <figure class="figure">
        <img :src="url" alt="" class="img-responsive">
        <figcaption class="text-center text-gray mt-2">{{ counter }}</figcaption>
    </figure>

</template>

<script>
    export default {
        name: "slide",
        props: {
            url: String,
            counter: String
        }
    }
</script>

<style scoped>
    figure.figure {
        transition: opacity 0.2s ease-in;
    }

    .dimmed {
        opacity: 0.5;
    }
</style>

