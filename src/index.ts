import Header from "./components/Header/Header.js";
import type { Pokemon } from "./components/types.js";

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

const screen = document.querySelector(".root");

const header = new Header(screen as HTMLElement);
header.render();
