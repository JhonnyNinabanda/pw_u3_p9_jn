import axios from "axios";
/*A las APIs se les conoce o son metodos o verbos http 
para consultar se usa un metodo GET
 - Cuerpo para consumir la API*/

const consumirAPI = async () => {
    const respuesta = axios.get('https://yesno.wtf/api').then(r => r.data)
    console.log(respuesta);
    return respuesta;
}

export async function consumirAPIFacade() {
    return await consumirAPI();
}

export async function consumirAPIFacade2() {
    return await consumirAPI();
}