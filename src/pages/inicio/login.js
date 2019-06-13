import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { async } from 'q';
import api from "../../services/api.js";
import { login } from "../../services/auth";


class Login extends Component {
    /*  constructor(props){
           super(props);
           this.state={
               usuario: '',senha: ''
           }
      }
      */

    state = {
        email: '', senha: ''
    }

    handleSubmit = async e => {
        const { email, senha } = this.state;
        // if( !this.state.usuario || !this.state.senha ){
        if (email || senha) {
            e.preventDefault();
            // alert('A login usuario : ' + this.state.usuario +'\n Senha: '+this.state.senha);
            const response = await api.post("/usuario", { email, senha });
            //login(response.data.token);

            this.props.history.push('/perfil');
        }

    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }




    render() {
        return (
       

            <Form onSubmit={this.handleSubmit}  className="p-4 container login">
                <Form.Group controlId="formBasicNome">
                    <Form.Control value={this.state.email} onChange={this.handleInputChange}  name='email'   type="text" placeholder="Nome de usuário ou email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control value={this.state.senha} onChange={this.handleInputChange} name='senha' type="password" placeholder="Senha" />
                </Form.Group>
                <Button  className="btn btn-light btn-entre"  variant="entre" type="submit">
                    Entrar
                 </Button>
        
            </Form>

        )
    }
}

export default withRouter(Login)