<template>
<div class="opciones-container">
    <ul>
        <li v-on:click="pasarPadre(pokemon.id)" v-for="pokemon in listaPokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
    </ul>

</div>
</template>

<script>
export default {
    props: {
        listaPokemons: {
            type: Array,
            required: true
        }
    },
    methods: {
        pasarPadre(id){
            this.$emit('seleccionado', id);
            console.log(id);
        }   
    }

}
</script>

<style scoped>
ul{
    list-style-type: none;
    border: 1px solid black;
    padding: 15px 15px;
    border-radius: 10px;
}
li{
    background-color: lightgray;
    border-radius: 5px;
    border: 1px solid ;
    cursor: pointer;
    width: 250px;
    margin-top: 10px;
    padding: 10px 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.opciones-container{
    display: flex;
    justify-content: center;
}
</style>