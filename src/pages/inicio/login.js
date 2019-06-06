import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

class Login extends Component {
    /*  constructor(props){
           super(props);
           this.state={
               usuario: '',senha: ''
           }
      }
      */

    state = {
        usuario: '', senha: ''
    }

    handleSubmit = e => {
        const { usuario, senha } = this.state;
        // if( !this.state.usuario || !this.state.senha ){
        if (usuario || senha) {
            e.preventDefault();
            // alert('A login usuario : ' + this.state.usuario +'\n Senha: '+this.state.senha);

            this.props.history.push('/Perfil');
        }

    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }




    render() {
        return (
       

            <Form onSubmit={this.handleSubmit} className="p-4 container login">
                <Form.Group controlId="formBasicNome">
                    <Form.Control value={this.state.usuario} onChange={this.handleInputChange}  name='usuario'   type="text" placeholder="Nome de usuário ou email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control value={this.state.email} onChange={this.handleInputChange} name='senha' type="password" placeholder="Senha" />
                </Form.Group>
                <Button  className="btn btn-light btn-entre"  variant="primary" type="submit">
                    Entrar
                 </Button>
        
            </Form>

        )
    }
}

export default (Login)