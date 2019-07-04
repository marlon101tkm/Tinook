import React, { Component } from "react";
import BarraNav from'../../barraNav.js'
import api from "../../services/api.js";
//import '../../style.css'

/*
const nomeU = "@joao1297";
const nomeCom = "João";
const emailU = "joao@gmail.com";
const senha = "1513palrhdi"
*/
const imagen= "https://cdn1.iconfinder.com/data/icons/rcons-user-action/512/user-128.png"
export default class Perfil extends Component {


    state = {
        nomeUsuario: "", nome: "", email: "", senha: ""
    }
    
    //busca no banco dos dados do usuario
    componentDidMount(){
        api.get(`/usuario/${1}`).then(res=>{
            console.log(res.data.nome)
            this.setState({
                nomeUsuario: res.data.username,
                nome: res.data.nome,
                email: res.data.email,
                senha: res.data.senha
            })
        })
        

    }
    
    //teste com dados estaticos
    /*
   componentDidMount(){

        this.setState({
            nomeUsuario: nomeU,
            nome: nomeCom,
            email: emailU,
            senha: senha
        })

}

*/



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
                            <div className="input-group mb-4 col-xl-6">
                                <label>Usuario: </label>
                                <input type="text" className="form-control ml-3" aria-label="Nome"
                                    aria-describedby="basic-addon1" defaultValue={this.state.nomeUsuario} />
                            </div>
                            <div className ="input-group mb-4 col-xl-6">
                                <label>Nome: </label>
                                
                                <input type="text" className  ="form-control ml-3" aria-label="Nome"
                                    aria-describedby="basic-addon1" defaultValue={this.state.nome} />
                            </div>
                            <div className ="input-group mb-4 col-xl-6">
                                <label>Email:   </label>
                                
                                <input type="text" className ="form-control ml-3" aria-label="email" 
                                    aria-describedby="basic-addon1" defaultValue={this.state.email} />
                            </div>
                            <div className ="input-group mb-4 col-xl-6">
                                <label >Senha: </label>
                               
                                <input type="password" className ="form-control ml-3" aria-label="Senha"
                                    aria-describedby="basic-addon1"  defaultValue={this.state.senha} />
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