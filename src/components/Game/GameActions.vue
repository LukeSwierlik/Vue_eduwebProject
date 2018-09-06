<template>
    <div class="row">
        <h1>{{ action }}</h1>

        <div class="columns">
            <div class="column col-8 col-mx-auto">
                <div class="mb-2" v-for="desc in descriptions">
                    <div class="toast toast-primary">
                        <button class="btn btn-clear float-right"></button>
                        {{ desc.descriptionUser }}
                    </div>

                    <div class="toast toast-error">
                        <button class="btn btn-clear float-right"></button>
                        {{ desc.descriptionMonster }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "game-actions",
        props: {
            action: {
                type: String
            },
            attackFight: {
                type: Object
            },
            heal: {
                type: Number
            }
        },
        data() {
            return {
                descriptions: [],
                fightStart: false,
            }
        },
        watch: {
            action: function(value) {
                if(!this.fightStart) {
                    this.fightStart = true;
                }

                this.changeDescription(value);

                console.log('this', this);
            }
        },
        methods: {
            changeDescription(value) {
                switch (value) {
                    case 'attack': {
                        this.descriptions.push({
                            descriptionUser: `Zaatakowałeś MONSTERA. Zadajesz mu: ${this.attackFight.attackUser} obrażeń.`,
                            descriptionMonster: `MONSTER zrobił kontratak. Zadał: ${this.attackFight.attackMonster} obrażeń.`
                        });

                        break;
                    }
                    case 'special': {

                        break;
                    }
                    case 'heal': {
                        this.descriptions.push({
                            descriptionUser: `Uleczyłeś się! Twoje życie zwiększyło się o: ${this.heal}.`,
                            descriptionMonster: `Czeka.`
                        });
                        break;
                    }
                    case 'give': {

                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>

