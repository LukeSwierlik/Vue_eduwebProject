<template>
    <div class="row">
        <div class="columns">
            <div class="column col-12">
                <h3>{{ title }}</h3>
            </div>

            <div class="column col-12">
                <div class="bar bar-sm">
                    <div class="bar-item" role="progressbar" :style="{width: life + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "game-life",
        props: {
            life: {
                type: Number
            },
            title: {
                type: String
            }
        }
    }
</script>

<style scoped>
    .columns{
        margin-bottom: 24px;
    }
</style>
