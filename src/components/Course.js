import React from 'react';

class Card extends React.Component{
    
    card() {
        return{
            width: '14rem',
            margin: '5px 0 5px 0',
            height: 'auto'
        }
    }
    render() {      
        const {portada, titulo, descripcion} = this.props
        return ( 
                <div className="card border-info" style={this.card()}>
                    <img
                        className="card-img-top img-fluid img-thumbnail" 
                        src={portada || 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
                        }  
                        alt="" 
                        width="100%"
                        height="150px" 
                    />
                        
                    <div className="card-body">
                        <h4 className="card-title">{titulo}</h4>
                        <p className="card-text">{descripcion}</p>
                        <a href="#" className="btn btn-danger btn-block">Leer Mas</a>
                    </div>
                </div>  
        )
    }
}   

export default Card;