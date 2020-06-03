import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons, index, pokemon, pokemonFiltered } = this.props;
    // const indexedPokemon = pokemons[index];
    // console.log("test",pokemonFiltered);
    const indexedPokemon = pokemon;

    return (
      <div>
        {<Pokemon key={indexedPokemon.name} pokemon={indexedPokemon} />}
        {/* {pokemons.map(x => (
          <Pokemon key={x.name} pokemon={x} />
        ))} */}
      </div>
    );
  }
}

export default Pokedex;
