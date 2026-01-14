// conectar la pokemon API https://pokeapi.co/api/v2/pokemon/
import axios from 'axios';
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// consumir api por nombre
const consumirAPIname = async (pokemonName) => {
    const respuesta = axios.get(`${BASE_URL}${pokemonName}`).then(r => r.data)
    console.log(respuesta);
    return respuesta;
}

export async function consumirAPIFacadeName(pokemonName) {
    return await consumirAPIname(pokemonName);
}

// consumir api por id

const consumirAPI = async (Id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${Id}`).then(r => r.data)
    console.log(respuesta);
    return respuesta;
}

export async function consumirAPIFacade(Id) {
    return await consumirAPI(Id);
}

//  ObtenerAleatorio
function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// lambda para obtener un vectornumerico de  4 id aleatorios
const obtenerVectorAleatorio = () => {
    const vector = [];
    for (let i = 0; i < 4; i++) {
        vector[i] = obtenerAleatorio(1, 600);
    }
    return vector;
}

// labmda para obtener un vectorpokemon
const obtenerVectorPokemon = async (obtenerVectorAleatorio) => {
    const data1 = await consumirAPI(obtenerVectorAleatorio[0]);
    const data2 = await consumirAPI(obtenerVectorAleatorio[1]);
    const data3 = await consumirAPI(obtenerVectorAleatorio[2]);
    const data4 = await consumirAPI(obtenerVectorAleatorio[3]);

    const obj1 = { nombre: data1.name, id: data1.id };
    const obj2 = { nombre: data2.name, id: data2.id };
    const obj3 = { nombre: data3.name, id: data3.id };
    const obj4 = { nombre: data4.name, id: data4.id };

    return [obj1, obj2, obj3, obj4];
}

// funciones facade

export async function obtenerVectorPokemonFacade() {
    const vectorAleatorio = obtenerVectorAleatorio();
    return await obtenerVectorPokemon(vectorAleatorio);
}

//para el aleatorio
export function obtenerAleatorioFacade(min, max) {
    return obtenerAleatorio(min, max);
}