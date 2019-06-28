import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import React from 'react';
import Inicio from './pages/inicio/inicio.js'
import Perfil from './pages/perfil/perfil.js'
import Estante from './pages/estante/estante.js'
import Filtro from './pages/filtro/filtro.js'
import PerfilLivro from './pages/perfil_livro/perfilLivro.js'
import Busca from './pages/busca/busca.js'

/*

const Routes =() =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/'  component={Inicio}/>
            <Route path='/perfil' component={Perfil}/>
            <Route path='/estante' component={Estante}/>
        </Switch>

    </BrowserRouter>
)

export default Routes

*/


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

      <Route path="/busca"component={Busca}/>
      <Route path="/perfilLivro" component={PerfilLivro} />
      <Route path="/filtro" component={Filtro} />
      <Route path="/perfil" component={Perfil} />
      <Route path='/estante' component={Estante} />
      <Route exact path='/' component={Inicio} />

    </Switch>
  </BrowserRouter>
);

export default Routes;

/*<PrivateRoute path="/perfil" component={Perfil} />
 <Route exact path='/' component={Inicio} />
*/