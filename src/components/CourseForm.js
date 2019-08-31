import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class CourseForm extends Component{
    
   // state = {}

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    } 

    render(){
        const {onChange, form} = this.props
        return( 
                        <form onSubmit={this.handleSubmit}>
                        
                            <div className="form-group">
                                <label for="coverpage">Portada del Curso</label>
                                <input type="text" 
                                       name="coverpage"
                                       className="form-control" 
                                       placeholder="Imagen de Portada" 
                                       onChange={onChange}
                                       value={form.coverpage} />
                            </div>

                            <div className="form-group">
                                <label for="title">Titulo del Curso</label>
                                <input type="text" 
                                       name="title"
                                       className="form-control" 
                                       placeholder="Titulo" 
                                       onChange={onChange}
                                       value={form.title} />
                            </div>

                            <div className="form-group">
                                <label for="description">Descripcion del Curso</label>
                                <input type="text" 
                                       name="description"
                                       className="form-control" 
                                       placeholder="Descripcion" 
                                       onChange={onChange}
                                       value={form.description} />
                            </div>

                            <a href="#" className="btn btn-info btn-lg mr-2 p-2">Nuevo Curso</a>
                            <Link to='/'>
                            <a href="#" className="btn btn-info btn-lg mr-2 p-2">Atras</a>            
                            </Link>
                        </form>
        )
    }
}

export default CourseForm