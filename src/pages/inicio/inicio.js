import React,{Component} from 'react';
import Login from './login.js';
import Cadastro from './cadastro.js';
import BarraNav from'../../barraNav.js'



export default class Inicio extends Component{
  

  render(){
    return(
      <div>
        <BarraNav />
        <div class='container'>
          <div class="row">
            <div class="col">

            </div>
            <div class="col">
              <h1 class="ml-4 mt-3">Cadastre-se!</h1>
              <div class="mr-3">
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