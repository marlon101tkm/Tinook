import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import api from "../../services/api.js";
import { login } from "../../services/auth";


class Login extends Component {
   

    state = {
        email: '', senha: ''
    }


    //login ainda não esta funcionado
    handleSubmit = async e => {
        const { email, senha } = this.state;
        if (email || senha) {
            e.preventDefault();
            const response = await api.get("/usuario", { email, senha });
            login(response.data.token);

            this.props.history.push('/perfil');
            console.log(response.data.email);
        }

    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }




    render() {
        return (

            <div class="p-4 container login">
            <div class="row">
                <div class="input-group mb-4 input-login">
                    <input type="text" class="form-control" placeholder="Nome de usuário ou email" aria-label="NomeCompleto" aria-describedby="basic-addon1" value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div class="input-group mb-4 input-login">
                    <input type="text" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1"value={this.state.senha} onChange={this.handleInputChange} />
                </div>
            </div>
            <button type="button" class="btn btn-light btn-entre">Entrar</button>
        </div>
        )
    }
}

export default withRouter(Login)