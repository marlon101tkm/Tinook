import React, { Component } from "react";
import api from "../../services/api.js";

 class Cadastro extends Component {

    state = {

        nome: '', email: '', senha: '', nomeUsu:''
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleSubmit = async e => {
        e.preventDefault();
      
        const { nomeUsu, email, senha,nome } = this.state;
       
        if (!senha || !email || !nome || !nomeUsu) {    
            alert("Preencha todos os dados para se cadastrar");
        } else {
            //Envio do Json para o banco
            try {
                await api.post("/usuario", { nome,email,senha,username: nomeUsu});
            } catch (err) {
                console.log(err);

            }

        }
    };


    render() {
        return (

            <div class="p-4 container cadastro">
                <div class="row">
                    <div class="input-group mb-4 col-xl-6">
                        <input type="text" class="form-control" placeholder="Nome completo" aria-label="NomeCompleto" aria-describedby="basic-addon1"value={this.state.nome} onChange={this.handleInputChange}/>
                                </div>
                        <div class="input-group mb-4 col-xl-6">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Nome de usuário" aria-label="NomeUsuario" aria-describedby="basic-addon1" value={this.state.nomeUsu} onChange={this.handleInputChange}/>
                                </div>
                        </div>
                        <div class="input-group mb-4">
                            <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2"value={this.state.email} onChange={this.handleInputChange}/>
                            </div>
                            <div class="input-group mb-4">
                                <input type="text" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" value={this.state.senha} onChange={this.handleInputChange}/>
                            </div>
                                <button type="button" class="btn btn-light btn-cadastro">Cadastrar</button>
                            </div>
        )
    }
}




export default (Cadastro);



