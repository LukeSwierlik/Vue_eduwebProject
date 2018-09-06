<template>
    <div class="row">
        <div class="columns">
            <div class="column col-12">
                <h1>{{ titleComponent }}</h1>
            </div>

            <div class="column col-12">
                <form action="#" class="form-horizontal">
                    <div class="form-group">
                        <div class="col-3">
                            <label class="form-label">
                                Wybierz wartość startową!
                            </label>
                        </div>

                        <div class="col-3">
                            <select class="form-select" v-model="initValue" :disabled="inProgress">
                                <option v-for="i in 10">
                                    {{ i }}
                                </option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>

            <div class="column col-12">
                <counter :init-value="initValue" @progress="toggleState"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from "../components/Counter";

    export default {
        name: "counter-container",
        data() {
            return {
                initValue: 10,
                inProgress: false
            }
        },
        props: {
            titleComponent: {
                type: String
            }
        },
        methods: {
            toggleState: function(value) {
                this.inProgress = value;
            }
        },
        components: {
            Counter
        }
    }
</script>

<style scoped>

</style>
