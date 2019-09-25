import React, {Component} from 'react'
import CoursesList from '../components/CoursesList'
import Header from '../components/Header'
import Error500 from './500'
import Loading from '../components/Loading'
import Api from './../api'
import { nullLiteral } from '@babel/types'


class PaginaInicio extends Component{
    
    state={

        loading:true,
        error:null,
        data: [] /* undefined */
    }

    componentDidMount(){
        this.getCursos();
        console.log(this.state.data)
    }

    getCursos = async() => {
        this.setState({loading:true, error: null})

        try {
            //La llamada a la api en data se realiza con una promesa
            const data = /* [] */ await Api.cursos.list()
            
            this.setState({loading:false, data: data})
            console.log(data);

        } catch (error) {
            this.setState({loading:false, error: error})
        }
    }
    
    render(){

        if(this.state.loading === true)
            return <Loading />

        if (this.state.error === true)
            return <Error500 />

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