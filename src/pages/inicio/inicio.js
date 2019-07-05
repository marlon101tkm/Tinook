import React,{Component} from 'react';
import Login from './login.js';
import Cadastro from './cadastro.js';
import BarraNav from'../../barraNav.js'



export default class Inicio extends Component{
  

  render() {
    return (
      <div>
        <BarraNav />
        <div className='container'>
          <div className="row justify-content-center">
            <div className="col-xs-4">
              <h1 className="ml-4 mt-3">Cadastre-se!</h1>
              <div className="mr-3">
                <Cadastro />

                <Login />

              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


/*

function Inicio(props){
    return (
      
       
    )
}
export default Inicio;*/