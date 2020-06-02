import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div>       
          {pokemons.map(x => <Pokemon key={x.name} pokemon = {x} />)}
             </div>
        );
    }
}

export default Pokedex;