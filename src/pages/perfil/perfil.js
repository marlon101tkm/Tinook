import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import BarraNav from'../../barraNav.js'
import api from "../../services/api.js";
import { logout } from "../../services/auth.js";

const nomeU = "@joao1297";
const nomeCom = "João";
const emailU = "joao@gmail.com";



export default class Perfil extends Component {


    state = {
        nomeUsuario: nomeU, nome: nomeCom, email: emailU 
    }

    componentDidMount(){
        
        

    }

    handleSubmit = (e) => {
        e.preventDefault();
        // alert('A login usuario : ' + this.state.usuario +'\n Senha: '+this.state.senha);
        this.props.history.push('/');


    }

    render() {
        return (
            <div>
                <BarraNav/>
                <Card className ="card mb-3 mt-5  no-gutters " >
                    <Card.Img className="col-md-4" src="data:image/png;base64,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" />
                    <Card.Body className="col-md-8" >
                        <Card.Title >Nome de usuário: {this.state.nomeUsuario}</Card.Title>
                        <Card.Text >Nome: {this.state.nome}</Card.Text>
                        <Card.Text >Email: {this.state.email}</Card.Text>
                        <Button >  </Button>
                    </Card.Body>
                </Card>
            </div>


        );
    }
}