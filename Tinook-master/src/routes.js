import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import React from 'react';
import Inicio from './pages/inicio/inicio.js'
import Perfil from './pages/perfil/perfil.js'


const Routes =() =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/'  component={Inicio}/>
            <Route path='/Perfil' component={Perfil}/>
        </Switch>

    </BrowserRouter>
)

export default Routes



/*
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Inicio} />
      <PrivateRoute path="/perfil" component={Perfil} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
*/