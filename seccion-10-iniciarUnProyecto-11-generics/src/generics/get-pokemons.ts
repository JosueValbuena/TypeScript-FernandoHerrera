import axios from "axios";

export const getPokemon = async <Pokemon>(pokemonID: number): Promise<Pokemon> => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    console.log(data);
    return data.name
};