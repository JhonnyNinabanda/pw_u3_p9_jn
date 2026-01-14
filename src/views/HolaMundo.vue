<template>
    <div class="hola-mundo">
        <h1>Hola Mundo</h1>
        <p>¡Bienvenido a la página de Hola Mundo!</p>

        <h1>Consultando datos del estudiante</h1>
        <button @click="mostrarId">Mostrar ID</button>
        <p>ID del estudiante: {{ idEstudiante }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            idEstudiante: null,
        }
    },
    created(){
        console.log(this.$route);
        console.log(this.$route.params.nombre_de_la_parte_variable);
        //this.idEstudiante = this.$route.params.nombre_de_la_parte_variable;
        console.log(this.$route.query.anio);
        console.log(this.$route.query.mes);
        console.log(this.$route.query.nombre);
    },
    methods: {
        mostrarId() {
            this.idEstudiante = this.$route.params.nombre_de_la_parte_variable;
        }
    }

}
</script>

<style>

</style>