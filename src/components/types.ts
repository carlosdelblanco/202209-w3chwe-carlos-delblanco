export interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export interface Pokemon {
  name: string;
  sprites: {
    other: {
      "official-artwork": { front_default: string };
    };
  };
}

export interface PokemonList {
  results: {
    name: string;
  };
}
