import React,{Component} from "react";
import api from "../../services/api.js";
import {withRouter} from 'react-router-dom'
import { async } from "q";
import Axios from "axios";

 class Cadastro extends Component{

    state={

        nome: '',email: '',senha: ''
    }

    handleInputChange =(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    

    handleSubmit = async e => {
        e.preventDefault();
        const user = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
          };


        if ( !user.senha || !user.email|| !user.nome ) {
         alert( "Preencha todos os dados para se cadastrar" );
        } else {
          
            const response= await api.post(`/usuario`,{user})
            console.log(response);
            console.log(response.data);
             
        }
      };


    render(){
        return(       
            <div >
             
               <form onSubmit={this.handleSubmit}>
               <input type='text' 
                name='nome'
                placeholder='Nome'
                value={this.state.nome}
                onChange={ this.handleInputChange}/><br/>
                
                <input type='text' 
                name='email'
                placeholder='Email'
                value={this.state.email}
                onChange={ this.handleInputChange}/><br/>

                <input type='password'
                 name='senha'
                 placeholder='Senha'
                 value={this.state.senha}
                 onChange={ this.handleInputChange}/><br/>

                <button type="submit" >Cadastrar</button>
               </form>
           </div>
        )
    }
}

export default (Cadastro);



/*
{
	"edicao": "1",
	"genero":"Fantasia",
	"titulo": "Harry Poter e a Orden da Fenix",
	"condicao":"Otima" ,
	"isbn":"12332312" ,
	"lancamento": "2009-05-03" ,
	"sinopse": "livro legal" ,
	"lingua": "Portugues",
	"usuario_id": "4"
	
	
}
*/