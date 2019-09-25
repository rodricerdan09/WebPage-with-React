import React,{Component} from 'react'
import Course from './Course'

class CoursesList extends Component{
    render(){
        const {cursos} = this.props
        
        if(cursos.length === 0){
            return (
                <div className="jumbotron-fluid bg-danger text-white text-center p-2 m-0">
                    <h2 className="display-5">NO HAY CURSOS CARGADOS</h2>
                </div>
            )
        }
        return(
            <div className="card-deck">
                    { cursos.map( (curso) => {
                        return(                 
                            <div className="col-12 col-md-3">
                                <Course
                                    key={curso.id}
                                    portada={curso.coverpage}
                                    titulo={curso.title}
                                    descripcion={curso.description}
                                />    
                            </div>  
                        )
                    }) }
            </div>   
        )
    }
}

export default CoursesList

/* const CoursesList = ({cursos}) => (

    
) */