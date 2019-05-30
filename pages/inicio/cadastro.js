import React,{Component} from "react";
import api from "../../services/api.js";
import {withRouter} from 'react-router-dom'
import { async } from "q";

 class Cadastro extends Component{

    state={

        nome: '',sobrenome: '',usuario: '',email: '',senha: ''
    }

    handleInputChange =(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    

    handleSubmit = async e => {
        e.preventDefault();
        const { nome,sobrenome,usuario, email, senha } = this.state;
        const nomeCompleto = nome +" "+ sobrenome;
        if (!usuario || !email || !senha|| !nome || !sobrenome ) {
         alert( "Preencha todos os dados para se cadastrar" );
        } else {
          
            /*await*/ api.post("/tinook/api/usuario", { usuario, email, senha});
            alert("conta criada")
            this.props.history.push("/Perfil");
          
        }
      };


    render(){
        return(       
            <div >
             
               <form>
               <input type='text' 
                name='nome'
                placeholder='Nome'
                onChange={ this.handleInputChange}/>

                <input type='text' 
                name='sobrenome'
                placeholder='Sobrenome'
                onChange={ this.handleInputChange}/><br/>
                

                <input type='text' 
                name='usuario' 
                placeholder='Usuario' 
                onChange={ this.handleInputChange}/><br/>
                
                <input type='text' 
                name='email'
                placeholder='Email'
                onChange={ this.handleInputChange}/><br/>

                <input type='password'
                 name='senha'
                 placeholder='Senha'
               
                 onChange={ this.handleInputChange}/><br/>

                <button    onClick={this.handleSubmit} >Cadastrar</button>
               </form>
           </div>
        )
    }
}

export default withRouter(Cadastro);