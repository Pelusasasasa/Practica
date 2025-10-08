import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async( id: number = 1) => {
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return data;
}; 