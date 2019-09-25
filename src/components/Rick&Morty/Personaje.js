import React,{Component} from 'react'
import { Link } from "react-router-dom";


class Personaje extends Component {
  render() {
      const {image, key, nombre, especie, origen, genero} = this.props
    return (
      <div className="col-md-3">
        <div className="card shadow mb-3 bg-white rounded" id={key}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link id={key} to="/detalle">
              <h5 className="card-title">{nombre}</h5>
            </Link>
            <p className="card-text">{especie}</p>
            <p className="card-text">
                <small className="text-muted">{origen}</small>
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{genero}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Personaje;