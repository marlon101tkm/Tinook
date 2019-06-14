import React,{Component} from 'react';
import Login from './login.js';
import Cadastro from './cadastro.js';
import BarraNav from'../../barraNav.js'



export default class Inicio extends Component{
  

  render(){
    return(
      <div>  
        <BarraNav/>
       
        <Cadastro />
      
        <Login/>   
        
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