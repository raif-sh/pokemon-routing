<template>
    <div class="container">
      <div class="pokemon">
        <router-view></router-view>

        <div class="pokemon-links has-text-centered">
            <router-link to="/charizard">
            /Charizard
            </router-link>
            <router-link to="/blastoise">
            /blastoise
            </router-link>
            <router-link to="/venusaur">
            /venusaur
            </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import { component } from 'vue/types/umd'
export default {
    name: "App",
    components: {
      PokemonCard: CharizardCard
    }
}
</script>

<style lang="css src="./styles.css>

</style>