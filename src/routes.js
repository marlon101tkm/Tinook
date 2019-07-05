import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import React from 'react';
import Inicio from './pages/inicio/inicio.js'
import Perfil from './pages/perfil/perfil.js'
import Estante from './pages/estante/estante.js'
import Filtro from './pages/filtro/filtro.js'
import PerfilLivro from './pages/perfil_livro/perfilLivro.js'
import Busca from './pages/busca/busca.js'
import ListaMatch from './pages/match/listaMatch.js'




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
      
      <PrivateRoute path="/match"component={ListaMatch}/>
      <PrivateRoute path="/busca"component={Busca}/>
      <PrivateRoute path="/perfilLivro" component={PerfilLivro} />
      <PrivateRoute path="/filtro" component={Filtro} />
      <PrivateRoute path="/perfil" component={Perfil} />
      <PrivateRoute path='/estante' component={Estante} />
      <Route exact path='/' component={Inicio} />

    </Switch>
  </BrowserRouter>
);

export default Routes;

/*<PrivateRoute path="/perfil" component={Perfil} />
 <Route exact path='/' component={Inicio} />
*/