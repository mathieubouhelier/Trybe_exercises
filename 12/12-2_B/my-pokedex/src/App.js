import React from 'react';
import './App.css';
import data from './data';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      pokemon: data[0],
      filter: 'All',
      pokemonFiltered: data,
    };
  }

  incrementIndexValue = event => {
    console.log('setFilterValue incrementIndexValue',this.state.filter);
    this.setState((index, pokemon, filter) => ({

      pokemonFiltered: data.filter(pokemon =>
        [pokemon.type, 'All'].includes(this.state.filter),
      ),
      // index:
      //   this.state.index === this.state.pokemonFiltered.length - 1
      //     ? 0
      //     : this.state.index + 1,
      // pokemon: this.state.pokemonFiltered[this.state.index],
    }));
    console.log('pokemonFiltered incrementIndexValue',this.state.pokemonFiltered);
  };

  setFilterValue = event => {

    this.setState( () => (
      {filter: 'Electric'}));
    console.log('setFilterValue',this.state.filter);
    console.log('pokemonFiltered',this.state.pokemonFiltered);

  };

  render() {
    return (
      <div>
        <div className="App">
          {/* <input onChange={this.setindexValue} type="text" /> */}
          <button onClick={this.incrementIndexValue} type="button">
            Next Pokemon
          </button>
          <button onClick={this.setFilterValue.bind(this)} type="button">
            Electric
          </button>
        </div>
        <div className="App">
          <Pokedex
            index={this.state.index}
            pokemons={data}
            pokemon={this.state.pokemon}
            pokemonFiltered={this.state.pokemonFiltered}
          />
        </div>
      </div>
    );
  }
}

export default App;
