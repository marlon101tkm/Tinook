import React,{Component} from 'react';
import Login from './login.js';
import Cadastro from './cadastro.js';
import BarraNav from'../../barraNav.js'



export default class Inicio extends Component{
  

  render(){
    return(
      <div>  
        <BarraNav/>
        <div>
        <Cadastro />
        </div>
        <div>
        <Login/>   
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