import React, {Component} from 'react';
import Pokecard from './Pokecard';
class Pokedex extends Component {
    static defaultProps = {
        pokemon : [
            {id: 2 , name :'Pika' , type:'fire'},
            {id: 4, name:'Frog' , type:'wind'},
            {id : 11, name: 'Momo', type: 'light'}
            
        ]
    };
    render(){
        
        return (
          
            <div className="Pokedex">
                  <h1>Pokemons</h1>
              {this.props.pokemon.map((p) => (<Pokecard id={p.id} name={p.name} type={p.type} /> ))}
            </div>
        );
    }
}
export default Pokedex;