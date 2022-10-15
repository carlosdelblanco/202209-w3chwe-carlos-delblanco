import type { Pokemon, PokemonList } from "./components/types.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemon = async (number: number) => {
  const response = await fetch(`${apiUrl}${number}`);
  const {
    name,
    sprites: {
      other: {
        "official-artwork": { front_default: artwork },
      },
    },
  } = (await response.json()) as Pokemon;
  return { name, artwork };
};

console.log(fetchPokemon(5));
