import React, {Component} from 'react'
import CoursesList from '../components/CoursesList'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'


class PaginaInicio extends Component{
    
    state={
        data:[{
                "id": 1,
                "coverpage": "https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
                "title": "Curso de Programacion 1",
                "description": "Learn amazing street workout and calisthenics",         
                },{
                "id": 2,
                "coverpage": "https://cdn.pixabay.com/photo/2019/08/18/17/13/aircraft-4414576_960_720.jpg",
                "title": "Curso de Programacion 2",
                "description": "Learn amazing street workout and calisthenics",    
                },{
                "id": 3,
                "coverpage": "https://cdn.pixabay.com/photo/2019/08/14/13/46/condor-4405821_960_720.jpg",
                "title": "Curso de Programacion 3",
                "description": "Learn amazing street workout and calisthenics",         
        },{
            "id": 4,
            "coverpage": "https://cdn.pixabay.com/photo/2019/08/14/13/46/condor-4405821_960_720.jpg",
            "title": "Curso de Programacion 3",
            "description": "Learn amazing street workout and calisthenics",         
    },{
        "id": 5,
        "coverpage": "https://cdn.pixabay.com/photo/2019/08/14/13/46/condor-4405821_960_720.jpg",
        "title": "Curso de Programacion 3",
        "description": "Learn amazing street workout and calisthenics",         
},{
    "id": 6,
    "coverpage": "https://cdn.pixabay.com/photo/2019/08/14/13/46/condor-4405821_960_720.jpg",
    "title": "Curso de Programacion 3",
    "description": "Learn amazing street workout and calisthenics",         
},{
    "id": 7,
    "coverpage": "https://cdn.pixabay.com/photo/2019/08/14/13/46/condor-4405821_960_720.jpg",
    "title": "Curso de Programacion 3",
    "description": "Learn amazing street workout and calisthenics",         
},{
    "id": 8,
    "coverpage": "https://cdn.pixabay.com/photo/2019/08/14/13/46/condor-4405821_960_720.jpg",
    "title": "Curso de Programacion 3",
    "description": "Learn amazing street workout and calisthenics",         
},{
    "id": 9,
    "coverpage": "https://cdn.pixabay.com/photo/2019/08/14/13/46/condor-4405821_960_720.jpg",
    "title": "Curso de Programacion 3",
    "description": "Learn amazing street workout and calisthenics",         
}]
    }
    
    render(){
        return(
            <div>
                <Header 
                    title = "Bienvenido a la Página Principal"
                />
                <div className="container mt-4 mb-4">
                    <CoursesList 
                        cursos = {this.state.data}
                    />       
                </div>       
            </div>
        )
    }
}

export default PaginaInicio