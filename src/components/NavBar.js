import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import Inicio from '../pages/Inicio'
import NuevoCurso from '../pages/NuevoCurso'
import Logo from '../img/logo512.png'
import PaginaApi from '../pages/Rick&Morty/PaginaApi'
import './css/NavBar.css'

const NavBar = () => (

        <nav className="nav navbar navbar-expand-lg navbar-dark bg-info p-3">      
            <Link to="/">
                <a class="navbar-brand text-white" href={Inicio}>
                    <img src={Logo} width="30" height="30" class="d-inline-block align-top p-1" alt=""/>
                    Cursos
                </a>
            </Link>
        
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link" data-toggle="modal" data-target="#Modal">
                            <a href={Login}>Ingresar</a>
                         </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <a href={Inicio}>Inicio<span className="sr-only">(Actual)</span></a>
                         </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/nuevocurso" className="nav-link">
                            <a href={NuevoCurso}>Nuevo Curso</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/api" className="nav-link">
                            <a href={PaginaApi}>Rick & Morty</a>
                        </Link>
                    </li>     
                </ul>
                {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
                </form>  */} 
            </div>                         
        </nav>           
)

export default NavBar