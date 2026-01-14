<template>
    <div class="pokemon-container"> 
        <img :src="srcImagen" 
        alt="No se puede renderizar" />       
    </div>
</template>
    
<script>
import { consumirAPIFacade } from '../clients/PokemonClient.js';
export default {
    
    props: {
        pokemonId: {
            type: Number,
            required: true
        }
    },     
    computed: {
        // dentro del backticks (``) se usa ${} para insertar variables y vale llamar cualquier logica de js
        srcImagen() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    },
    // desmontaje en vue es cuando el componente se elimina del DOM
    // beforeUnmount sirve para ejecutar codigo justo antes de que el componente sea desmontado
    beforeUnmount() {
        console.log('beforeUnmount: justo antes de que el componente sea desmontado del DOM');
    },
    // unmounted sirve para ejecutar codigo una vez que el componente ha sido desmontado
    unmounted() {
        console.log('unmounted: ya se desmonto el componente, ya no esta en el DOM');
    },
    
}
</script>

<style scoped>

    img {
        position: relative;
        height: 200px;
        right: -42%;
    }   
    .pokemon-container {
        height: 200px;
    }   


</style>