import React, { Component } from "react";
import api from "../../services/api.js";
import { withRouter } from 'react-router-dom'
import { async } from "q";
import Axios from "axios";
import { Form, Button ,InputGroup, FormControl,Col} from 'react-bootstrap'

 class Cadastro extends Component {

    state = {

        nome: '', email: '', senha: ''
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleSubmit = async e => {
        e.preventDefault();
        const user = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        };


        if (!user.senha || !user.email || !user.nome) {
            alert("Preencha todos os dados para se cadastrar");
        } else {

            try {
                await api.post("/usuario", { user });
            } catch (err) {
                console.log(err);

            }

        }
    };


    render() {
        return (
           
     
            <Form onSubmit={this.handleSubmit} className="p-4 container login">
              <Form.Row>  
                <Form.Group className="input-group mb-4 col-xl-6" controlId="formBasicNomeCompleto">
                    <Form.Control  value={this.state.nome} onChange={this.handleInputChange} name="nome" type="text" placeholder="Nome Completo" />
                </Form.Group>
             
                 <InputGroup  className='input-group mb-4 col-xl-6' controlId="formBasicNomeUsuario">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name type="text" placeholder="Nome de usuário " />
                </InputGroup>
                </Form.Row> 
                <Form.Group class="input-group mb-4" controlId="formBasicEmail">
                    <Form.Control value={this.state.email} onChange={this.handleInputChange} name='email' type="text" placeholder="Email" />
                </Form.Group>

                <Form.Group class="input-group mb-4" controlId="formBasicPassword">
                    <Form.Control value={this.state.senha} onChange={this.handleInputChange} name='senha' type="password" placeholder="Senha" />
                </Form.Group>
                
                <Button className="btn btn-light btn-entre" variant="primary" type="submit">
                   Cadastrar
                 </Button>
                 
            </Form>
           
        )
    }
}




export default (Cadastro);



