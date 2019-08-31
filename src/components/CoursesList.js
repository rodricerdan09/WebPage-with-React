import React from 'react'
import Course from './Course'

const CoursesList = ({cursos}) => (

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

export default CoursesList