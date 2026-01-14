<template>
    <div>
        <PokemonImagen v-if="mostratComponente" :pokemonId="pokemonGanador" />
        <PokemonOpciones @seleccionado="evaluarGanador($event)" :listaPokemons="pokemonArr"/>
        <div class="resul">
          <p>{{ resultado }}</p>
        </div>
        <button v-if="mostratComponente" @click="destruir()">Destruir</button>
        
    </div>
</template>

<script>
    import PokemonImagen from '@/components/PokemonImagen.vue';
    import PokemonOpciones from '@/components/PokemonOpciones.vue';
    import { obtenerVectorPokemonFacade,obtenerAleatorioFacade } from '../clients/PokemonClient.js';
export default {
  components:{
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: 0,
      resultado: '',
      mostratComponente: true,
    };
  },
  /*Existen fases del ciclos de vida de componentes:
  before create, created, before mount, mounted, before update, updated, before destroy, destroyed */

  // beforeCreate sirve para ejecutar codigo  justo  antes de que se cree el componente
  beforeCreate() {
    console.log('beforeCreate: apenas inicia la instanciacion del componente');
  },
  // created sirve para ejecutar codigo una vez que se ha creado el componente
  created() {
    console.log('created: ya se resolvieron data, computed y watchers ahi se ejecuta');
  },
  // Montaje en vue es cuando se renderiza o visualiza el componente en el DOM( Document Object Model )
  // beforeMount sirve para ejecutar codigo justo antes de que se monte el componente en el DOM
  beforeMount() {
    console.log('beforeMount: justo antes de montarse en el DOM, justo antes del primer render de un elemento HTML');
  },
  // mounted sirve para ejecutar codigo una vez que el componente ha sido montado en el DOM
  mounted() {
    console.log('Componente montado: ya se renderizo en el DOM, ya se renderizo el componente');
    this.iniciarJuego();
  },
  // Actualizacion en vue es cuando hay un cambio en el estado del componente y se vuelve a renderizar
  // beforeUpdate sirve para ejecutar codigo justo antes de que el componente se actualice en el DOM
  beforeUpdate() {
    console.log('beforeUpdate: se ejecuta cuando hay un cambio en el estado del componente, justo antes de que se vuelva a renderizar');
  },
  // updated sirve para ejecutar codigo una vez que el componente ha sido actualizado en el DOM
  updated() {
    console.log('updated: ya se actualizo en el DOM, ya se volvio a renderizar el componente, ya se actualizo la re-renderizacion');
  },
  // Destruccion en vue es cuando el componente se elimina del DOM
  // beforeDestroy sirve para ejecutar codigo justo antes de que el componente sea destruido
  beforeDestroy() {
    console.log('beforeDestroy: justo antes de que el componente sea destruido, se usa para limpiar recursos o cancelar suscripciones');
  },
  // destroyed sirve para ejecutar codigo una vez que el componente ha sido destruido
  destroyed() {
    console.log('destroyed: ya se destruyo el componente, ya no esta en el DOM');
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

  methods: {
    destruir() {
      this.mostratComponente = false;
    },
    async iniciarJuego() {
    this.pokemonArr = await obtenerVectorPokemonFacade();

    const numero = obtenerAleatorioFacade(0,3)
    this.pokemonGanador = this.pokemonArr[numero].id;
    console.log('Pokemon ganador:', this.pokemonArr[numero].nombre,  this.pokemonArr[numero].id);

    },
    evaluarGanador(idSeleccionado) {
      console.log('ERecibido del Padre');
      console.log('ID seleccionado:', idSeleccionado);

        if (idSeleccionado === this.pokemonGanador) {
          console.log('¡Correcto! Has seleccionado el Pokémon ganador.');
          // como agrego el nombre del pokemon ganador al mensaje?
            this.resultado = `¡Correcto! Has seleccionado el Pokémon ganador es ¡ ${this.pokemonArr.find(p => p.id === this.pokemonGanador)?.nombre} !` ;
        } else {
          console.log('Incorrecto. Inténtalo de nuevo.');
            this.resultado = `Incorrecto era ${this.pokemonArr.find(p => p.id === this.pokemonGanador)?.nombre}. Inténtalo de nuevo.`;
        }
        this.iniciarJuego();
    },
  },
};

</script>

<style scoped>
h1 {
    color: blue;
}
.resul{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
p {
    font-size: 20px;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>