import React, { Component } from "react";
import api from "../../services/api.js";

 class Cadastro extends Component {
    state = {

             nome: '', email: '', senha: '', nomeUsu: ''
         }
     




    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
       
    }


    handleSubmit = async e => {
        e.preventDefault();
      
        const { username, email, senha,nome } = this.state;
       
        if (!senha || !email || !nome || !username) {    
            alert("Preencha todos os dados para se cadastrar");
        } else {
            //Envio do Json para o banco
            try {
                await api.post("/usuario", { nome,email,senha,username});
            } catch (err) {
                console.log(err);

            }

        }
    };



     

    render() {
        return (

            <form className="p-4 container cadastro" onSubmit={this.handleSubmit} >
                <div className="row">
                    <div className="input-group mb-4 col-xl-6">
                        <input type="text" className="form-control" placeholder="Nome completo" aria-label="NomeCompleto" aria-describedby="basic-addon1" name="nome" onChange={this.handleInputChange} />
                    </div>
                    <div className="input-group mb-4 col-xl-6">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Nome de usuário" aria-label="NomeUsuario" aria-describedby="basic-addon1" name="username" onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="input-group mb-4">
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" name="email" onChange={this.handleInputChange} />
                </div>
                <div className="input-group mb-4">
                    <input type="password" className="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" name="senha" onChange={this.handleInputChange} />
                </div>
                <button type="submit"  className="btn btn-light btn-cadastro">Cadastrar</button>
            </form>
        )
    }
}




export default (Cadastro);



