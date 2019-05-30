import React,{Component} from 'react';
import Login from './login.js';
import Cadastro from './cadastro.js';




export default class Inicio extends Component{
  

  render(){
    return(
      <div>  
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