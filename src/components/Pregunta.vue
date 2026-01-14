<template>
    <div>
        <img v-if="imagen" :src="imagen" alt="No se peude">
        <br>
        <div class="oscuro"></div>
        <div class="pregunta-container">

            <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">

            
            <p>Recuerda terminar con una interrogacion</p>

            <h2>{{ pregunta }}</h2>
            <h1>{{ respuesta }}</h1>

        </div>

    </div>
</template>

<script>
import {consumirAPIFacade} from '../clients/YesNoClient.js';
export default{
        data(){
            return{
                pregunta: null,
                respuesta: null,
            };
        },
        watch:{
            pregunta(values, oldValue){
                if(values.includes('?')){
                    //llamar al API
                    this.respuesta='Pensando....'
                this.consumir();
                }
            },
        },
        methods:{
            async consumir(){
                const resp= await consumirAPIFacade();
                
                    console.log("Respuesta final");
                    console.log(resp);
                    console.log(resp.answer);
                    this.respuesta = resp.answer;
                    this.imagen = resp.image;
            }

        }
};
</script>

<style scoped>

/*div {
    display: row;
    justify-content: center;
    justify-items: center;
}*/
img, .oscuro{
    height: 100hv;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;

}

.oscuro{
    background: rgba(0,0,0 , 0.4);
}

.pregunta-container {
    position: relative;
    color: aliceblue;
    min-height: 100vh; /* altura de toda la pantalla */
    display: flex;
    flex-direction: column; /* elementos uno debajo del otro */
    justify-content: center; /* centrado vertical */
    align-items: center; /* centrado horizontal */
    text-align: center;
}
input{
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}
input:focus{
    outline: none;
}

h1,h2,p{
    color: aliceblue;
}

p{
    font-size: 20px;
}

h2{
    margin-top: 150px;
}

</style>