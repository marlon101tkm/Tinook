import React, { Component } from "react";
import BarraNav from'../../barraNav.js'
import api from "../../services/api.js";
import { logout } from "../../services/auth.js";
//import '../../style.css'


const nomeU = "@joao1297";
const nomeCom = "João";
const emailU = "joao@gmail.com";

const imagen= " https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
export default class Perfil extends Component {


    state = {
        nomeUsuario: "", nome: "", email: ""
    }

    //ainda não implementado
    componentDidMount(){
        api.get(`/usuario`,{id: 1}).then(res=>{
            this.setState({
                nomeUsuario: res.data.username,
                nome: res.data.nome,
                email: res.data.email
            })
        })
        

    }


    //testes de vesões aneriores
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/');


    }

    render() {
        return (

            <div>
                <BarraNav />

                <div className  ="container mt-5">
                    <div className  ="row">
                        <div className  ="col-xs">
                            <img src={imagen} alt="..." className  ="img-thumbnail" />
                        </div>
                        <div className  ="col">
                            <div className ="input-group mb-4 col-xl-6">
                                <label for="Nome">Nome: {this.state.nome} </label>
                                
                                <input type="text" className  ="form-control ml-3" aria-label="Nome"
                                    aria-describedby="basic-addon1" />
                            </div>
                            <div className ="input-group mb-4 col-xl-6">
                                <label for="email">Email: {this.state.email}  </label>
                                
                                <input type="text" className ="form-control ml-3" aria-label="email" 
                                    aria-describedby="basic-addon1" />
                            </div>
                            <div className ="input-group mb-4 col-xl-6">
                                <label for="senha">Senha: {this.state.senha} </label>
                               
                                <input type="text" className ="form-control ml-3" aria-label="Senha"
                                    aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div className ="row mt-2">

                        <div className ="col-md-3 mb-2 text-center">
                            <button type="button" className ="btn btn-danger">Editar</button>
                        </div>
                        <div className ="col-md-3 mb-2 text-center">
                            <button type="button" className ="btn btn-danger">Mudar senha</button>
                        </div>
                        <div className ="col-md-3 mb-2 text-center">
                            <button type="button" className ="btn btn-danger">Deletar conta</button>
                        </div>
                        <div className ="col-md-3 mb-2 text-center">
                            <button type="button" className ="btn btn-danger">Congelar conta</button>
                        </div>

                    </div>
                </div>

            </div>




        );
    }
}