<template>
    <div class="row">
        <div class="columns" v-if="!isStart">
            <div class="column col-3">
                <button class="btn btn-success" @click="handlerActions('start')">Start</button>
            </div>
        </div>

        <div class="columns" v-else>
            <div class="column col-3">
                <button class="btn btn-success" @click="handlerActions('attack')">Attack</button>
            </div>

            <div class="column col-3">
                <button class="btn btn-error" @click="handlerActions('special')">Special Attack</button>
            </div>

            <div class="column col-3">
                <button class="btn btn-success" @click="handlerActions('heal')">Heal</button>
            </div>

            <div class="column col-3">
                <button class="btn btn-error" @click="handlerActions('give')">Give up</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "game-buttons",
        methods: {
            handlerActions: function(action) {
                this.actions = action;
                console.log('actions:', this.actions);
                this.$emit("actions", this.actions);
            }
        },
        data() {
            return {
                actions: ''
            }
        },
        props: {
            isStart: {
                type: Boolean
            }
        }
    }
</script>

<style scoped>

</style>
