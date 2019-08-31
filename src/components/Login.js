import React from 'react'
import {Link} from 'react-router-dom'
import '../components/css/Login.css'

const Login = () => (

    <div className="container">
        <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto Login">
            <div className="card card-signin border-primary my-5" data-toggle="modal">
            <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>

                <form className="form-signin">
                {/* <div className="form-label-group">
                    <input type="text" id="inputUser" className="form-control" placeholder="Ingrese su Nombre de Usuario" required autofocus/>
                    <label for="inputUser">Usuario</label>
                </div> */}

                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Ingrese su Correo Electronico" autofocus/>
                    <label for="inputEmail">Email</label>
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"/>
                    <label for="inputPassword">Contraseña</label>
                </div>

                <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" for="customCheck1">Recordar Contraseña</label>
                </div>

                <Link to='/'>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                </Link>

                <hr className="my-4"/>
                <button className="btn btn-lg  btn-outline-danger btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                <button className="btn btn-lg  btn-outline-info btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
)

export default Login