import React, {Component} from 'react'
import Logo from '../../components/Rick&Morty/Logo'
import ListaPersonajes from '../../components/Rick&Morty/ListarPersonajes'
import Error500 from '../500'
import Loading from '../../components/Loading'


class PaginaApi extends Component{
    
    state = {
        loading: true,
        error: null,
        nextPage: 1,
        data: {
          info: {}, // objeto
          results: [] //arreglo
        }
      };
    
      componentDidMount() {
        this.getPersonajes();
      }
    
      getPersonajes = async () => {
        this.setState({ loading: true, error: null });
    
        try {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
          );
          const data = await response.json();

          this.setState({
            loading: false,
            data: {
              info: data.info,
              results: [].concat(this.state.data.results, data.results)
            },
            nextPage: this.state.nextPage + 1
          });

        } catch (error) {
          console.log("Error en la página.");
          this.setState({
            loading: false,
            error: error
          });
        }
      };

    render(){
        if(this.state.loading === true)
            return <Loading />

        if (this.state.error === true)
            return <Error500 />

        return(
                <div className="container mt-4 mb-4">
                    <Logo />
                    <ListaPersonajes 
                        character = {this.state.data.results}
                        info = {this.state.data.info}
                        loading = {this.state.loading}
                    />
                </div>
        )
    }
}

export default PaginaApi