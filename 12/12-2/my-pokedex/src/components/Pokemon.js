import React from 'react';


class Pokemon extends React.Component {
    render() {
        const { name, id, type, image } = this.props.pokemon;
        return (
            <div className ='container'>
              <div className = "text">
              <p>{id},
              {name},
              {type},
              </p>
              </div>
            <img src={image} alt="Logo" />
           </div>
        );
    }   
}

export default Pokemon;

