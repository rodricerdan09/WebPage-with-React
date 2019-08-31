import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseForm from '../components/CourseForm'
import Course from '../components/Course'

class NuevoCurso extends Component {
    
    state = {
        form: {
            coverpage: '', 
            title: '', 
            description: ''
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    
    render(){
        const {coverpage, title, description} = this.state.form
        return (
            <div>
                <Header 
                    title="Agregar Nuevo Curso"
                />

                <div className='container'>
                    <div className='row mt-5 mb-5'>   
                        <div className='col-12 col-md-6'>
                            <Course
                                portada={coverpage} 
                                titulo={title} 
                                descripcion={description}
                            />
                        </div>
                        <div className='col-12 col-md-6'>
                            <CourseForm 
                                onChange={this.handleChange}
                                form={this.state.form}
                            />      
                        </div> 
                    </div>
                </div>
                
            </div>
        )
    }           

}

export default NuevoCurso