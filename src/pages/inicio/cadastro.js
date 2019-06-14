import React, { Component } from "react";
import api from "../../services/api.js";
import { withRouter } from 'react-router-dom'
import { async } from "q";
import Axios from "axios";
import { Form, Button ,InputGroup, FormControl,Col} from 'react-bootstrap'

 class Cadastro extends Component {

    state = {

        nome: '', email: '', senha: '', nomeUsu:''
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleSubmit = async e => {
        e.preventDefault();
       /* const user = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            nomeUsu: this.state.nomeUsu

        };*/
        const { nomeUsu, email, senha,nome } = this.state;

        //if (!user.senha || !user.email || !user.nome || !user.nomeUsu) {
        if (!senha || !email || !nome || !nomeUsu) {    
            alert("Preencha todos os dados para se cadastrar");
        } else {

            try {
               // await api.post("/usuario", { nome: user.nome,email: user.email, senha: user.senha, username:user.nomeUsu });
                await api.post("/usuario", { nome,email,senha,username: nomeUsu});
            } catch (err) {
                console.log(err);

            }

        }
    };


    render() {
        return (
           
     
            <Form onSubmit={this.handleSubmit}  className="p-4 container cadastro">
              <Form.Row>  
                <Form.Group className="input-group mb-4 col-xl-6">
                    <Form.Control  value={this.state.nome} onChange={this.handleInputChange} name="nome" type="text" placeholder="Nome Completo" />
                </Form.Group>
             
                 <InputGroup  className='input-group mb-4 col-xl-6'>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name='nomeUsu' value={this.state.nomeUsu} onChange={this.handleInputChange}  type="text" placeholder="Nome de usuário " />
                </InputGroup>
                </Form.Row> 
                <Form.Group class="form-group mb-4">
                    <Form.Control value={this.state.email} onChange={this.handleInputChange} name='email' type="text" placeholder="Email" />
                </Form.Group>

                <Form.Group class="form-group mb-4" >
                    <Form.Control value={this.state.senha} onChange={this.handleInputChange} name='senha' type="password" placeholder="Senha" />
                </Form.Group>
                
                <Button /*className="btn btn-light btn-cadastro"*/ variant="cadastro" type="submit">
                   Cadastrar
                 </Button>
                 
            </Form>
           
        )
    }
}




export default (Cadastro);



