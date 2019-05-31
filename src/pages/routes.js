import {BrowserRouter,Route,Switch} from 'react-router-dom';
import React from 'react';
import Login from './Login/Login.js';
import Perfil from './Perfil/Perfil.js';


const Routes =() =>(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact  component={Login}/>
            <Route path='/Perfil' component={Perfil}/>
        </Switch>

    </BrowserRouter>
)

export default Routes