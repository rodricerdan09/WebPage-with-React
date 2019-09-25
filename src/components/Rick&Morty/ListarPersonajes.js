import React,{Component} from 'react'
import Personaje from './Personaje'

class ListaDePersonajes extends Component {

    render() {

    return (
      <div className="row d-flex justify-content-center">
        <div className="col-12">
            <div className="card-deck pr-0 d-flex justify-content-center">
                {this.props.character.map(personaje => {
                return (
                    <Personaje
                    key={personaje.id}
                    image={personaje.image}
                    nombre={personaje.name}
                    especie={personaje.species}
                    origen={personaje.origin.name}
                    genero={personaje.gender}
                    ></Personaje>
                );
                })}
            </div> 
           {this.props.loading && <p className="text-center"> Loading ...</p>} 
        </div>

        <div className="row mb-2">
          {!this.props.loading && this.props.info.next && (
            <button
              className="btn btn-success"
              onClick={() => this.getPersonajes()}
            >
              Cargar mas ...
            </button>
          )}
        </div> 
      </div>
    );
  }
}

export default ListaDePersonajes;