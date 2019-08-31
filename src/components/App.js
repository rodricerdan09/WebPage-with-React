import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Layout from './Layout'
import Login from '../components/Login'
import Inicio from '../pages/Inicio'
import NuevoCurso from '../pages/NuevoCurso'
import NotFound from '../pages/NotFound'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => (
            <Router>       
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Inicio} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/nuevocurso" component={NuevoCurso} />
                        <Route exact path="/404" component={NotFound}/>
                        <Redirect from="*" to="/404"/>       
                    </Switch>
                </Layout>
            </Router>
)

export default App;

