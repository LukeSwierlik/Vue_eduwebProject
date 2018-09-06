<template>
    <div class="row">
        <div class="columns">
            <div class="column col-12">
                <h1>{{ titleComponent }}</h1>
            </div>
        </div>

        <div class="columns">
            <div class="column col-6">
                <game-life :title="'YOU'" :life="lifeUser" />
            </div>

            <div class="column col-6">
                <game-life :title="'MONSTER'" :life="lifeMonster" />
            </div>
        </div>

        <div class="columns">
            <div class="column col-12">
                <game-buttons @actions="changeAction" :isStart="isStart"/>
            </div>
        </div>

        <div class="columns">
            <div class="column col-12">
                <game-actions :action="action" :attackFight="attackFight" :heal="heal"/>
            </div>
        </div>
    </div>
</template>

<script>
    import GameLife from "../components/Game/GameLife";
    import GameButtons from "../components/Game/GameButtons";
    import GameActions from "../components/Game/GameActions";

    export default {
        components: {
            GameActions,
            GameButtons,
            GameLife
        },
        name: "game-container",
        props: {
            titleComponent: {
                type: String
            }
        },
        data(){
            return {
                lifeUser: 80,
                lifeMonster: 80,
                action: 'none',
                attackFight: {
                    attackUser: 0,
                    attackMonster: 0,
                },
                heal: 0,
                give_up: false,
                isStart: false
            }
        },
        watch: {
            action: function(value) {
                console.log('[GameContainer] watch', value);
            }
        },
        methods: {
            changeAction: function(value) {
                this.action = value;
                console.log('changeActions', value);

                switch (value) {
                    case 'attack': {
                        this.attackFight.attackUser = Math.floor(Math.random() * 10);
                        this.attackFight.attackMonster = Math.floor(Math.random() * 10);

                        this.lifeUser -= this.attackFight.attackMonster;
                        this.lifeMonster -= this.attackFight.attackUser;
                        break;
                    }
                    case 'special': {
                        this.attackFight.attackUser = Math.floor(Math.random() * 15);
                        this.attackFight.attackMonster = Math.floor(Math.random() * 12);
                        break;
                    }
                    case 'heal': {
                        this.heal = Math.floor(Math.random() * 5);

                        if(this.heal + this.lifeUser > 100) {
                            this.lifeUser = 100;
                        }
                        else{
                            this.lifeUser += this.heal;
                        }

                        break;
                    }
                    case 'give': {
                        this.give_up = true;

                        break;
                    }
                    case 'start': {
                        this.isStart = true;
                        break;
                    }
                    default: {
                        break;
                    }
                }

                //this.action = '';
            }
        }
    }
</script>

<style scoped>

</style>
