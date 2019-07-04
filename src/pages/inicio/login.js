import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import api from "../../services/api.js";
import { login } from "../../services/auth";
import '../../style.css'

class Login extends Component {
   

    state = {
        username: '', senha: ''
    }

   



    //login ainda não esta funcionado
    handleSubmit = async (e) => {
        e.preventDefault();
        const { username, senha } = this.state;
        
        
        //var existeUsu=false
        
        if (username && senha) {
                /*
            try {
                await api.get("/usuario").then(res => {

                    const lista_user = res.data;
                    
                    for (var i in lista_user) {
                        console.log(lista_user[i].username)
                        console.log(username)
                        if (lista_user[i].username === username && lista_user[i].senha === senha) {
                            
                            localStorage.setItem("user_id", lista_user[i].id);
                            this.props.history.push("/perfil");
                            existeUsu  = true
                        }
                    }     
                })
            } catch (err) {
                console.log(err)
            }
            if(!existeUsu){
                alert("usuario não existe")
            }
            */

           
             try {
                  await api.post("/usuario/login", { username, senha }).then(res =>{
                     
                 
                 login(res.data.token);
                 console.log(res.data)
                // this.props.history.push("/perfil");
 
                  })
               } catch (err) {
                 console.log(err)
               }
         
         
         
        }else{
            alert("preencha  os campos do login")
        }

    }





    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }




    render() {
        return (

            <form className = "p-4 container login" onSubmit={this.handleSubmit} >
            <div className = "row">
                <div className = "input-group mb-4 input-login">
                    <input type="text" className= "form-control" placeholder="Nome de usuário" aria-label="NomeCompleto" aria-describedby="basic-addon1" name="username" /*value={this.state.username}*/ onChange={this.handleInputChange} />
                </div>
                <div className = "input-group mb-4 input-login">
                    <input type="password" className = "form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" name="senha" /*value={this.state.senha}*/ onChange={this.handleInputChange} />
                </div>
            </div>
            <button type= "submit"  className = "btn btn-light btn-entre"  >Entrar</button>
        </form>
        )
    }
}

export default withRouter(Login)