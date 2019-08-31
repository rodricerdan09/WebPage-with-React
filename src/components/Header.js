import React, {Component} from 'react'
import './css/Header.css'

class Header extends Component{
        render() {
            const {title} = this.props
            return(
                <header className="jumbotron-fluid bg-dark text-white text-center p-2">
                    <div className="container">
                        <h1 className="display-4">{title}</h1>
                    </div>
                </header>
            )
        }
}
        

export default Header