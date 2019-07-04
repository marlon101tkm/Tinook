import React, { Component } from 'react';
import BarraNav from'../../barraNav.js'
import '../../style.css'
import api from "../../services/api.js";
import { async } from 'q';

const noImg ="https://static.thenounproject.com/png/340719-200.png"

class  PerfilLivro extends Component{

        state={
            titulo: '',isbn:'',autor:'',edicao:'',genero:'',condicao:'',lingua:'' , arq_selecionado: null
        }
        fileSelectedHandler = (e)=>{
            this.setState({arq_selecionado: e.target.files[0]})
        }
        handleInputChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        }
        
        //não esta iserindo todos os campos 
        cadastraLivro = async (e)=>{
            e.preventDefault();
            var livro_id, autor_id;
            const { titulo, isbn, autor, edicao, genero ,condicao, arq_selecionado,lingua } = this.state;
          
            if (titulo && isbn && autor && edicao && genero && condicao && lingua) {
                // insere na tabela livro
                try {
                    await api.post("/livro", { titulo, isbn, edicao, genero,lingua,usuario_id: 1 })
                } catch (err) {
                    console.log(err)
                }

                //pesquisa o id do livro inserido
                try {
                    await api.get("/livro").then(res => {
                        const lista_livro = res.data;
                        for (var i in lista_livro) {
                            console.log("isbn lista:"+ lista_livro[i].isbn)
                            console.log("isbn input:"+isbn)
                            if (lista_livro[i].isbn === isbn ) {
                                livro_id = lista_livro[i].id
                                console.log("id livro"+livro_id)
                            }
                        }
                    })

                } catch (err) {
                    console.log(err)
                }

                // pesquisa o id do autor 
                try {
                    await api.get("/autor").then(res => {
                        const lista_autor = res.data;
                        for (var i in lista_autor) {
                            if (lista_autor[i].nome === autor ) {
                                autor_id = lista_autor[i].id
                                //console.log("ID autor"+autor_id)
                            }
                        }
                    })

                } catch (err) {
                    console.log(err)
                }
                // insere na tabela relacional do autor-livro
                try {
                    await api.post("/autor_livro",{autor_id,livro_id})
                   
                } catch (err) {
                    console.log(err)
                }

                //insere na tabela relacional livro-foto
                try {
                    if(arq_selecionado==null){
                    await api.post("/livro_foto",{condicao,livro_id})
                    }else{
                        await api.post("/livro_foto",{condicao,livro_id,foto: arq_selecionado})
                    }
                } catch (err) {
                    console.log(err)
                }
                alert("livro Cadastrado");

            }else{
                alert("preencha todos os campos")
            }
        }



            render(){
                return (
                    <div>
                        <BarraNav />
                        <div className="container m-2">
                            <div className="row">
                                <div className="col-xs p-5">
                                    <img src={noImg} alt="..." className="img-thumbnail main-img" />
                                </div>
                                <div className="col-xs p-5 info-book-section">
                                    <div className="row">
                                    <div className="col-sm">
                                            <label >Foto</label>
                                            <input type="file" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                        </div>
                                        <div className="col-sm">
                                            <label >I.S.B.N</label>
                                            <input type="text" className="form-control" id="basic-url"   aria-describedby="basic-addon3" name="isbn"  onChange={this.handleInputChange} />
                                        </div>
                                        <div className="col-sm">
                                            <label >Idioma</label>
                                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="lingua"   onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm">
                                            <label >Título</label>
                                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="titulo"  onChange={this.handleInputChange} />
                                        </div>
                                        <div className="col-sm">
                                            <label >Condição</label>
                                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="condicao"   onChange={this.handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm">
                                            <label >Número da edição</label>
                                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="edicao"   onChange={this.handleInputChange}/>
                                        </div>
                                        <div className="col-sm">
                                            <label >Gênero</label>
                                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="genero"   onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm">
                                            <label >Número de páginas</label>
                                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                        </div>
                                        <div className="col-sm">
                                            <label >Autor</label>
                                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"name="autor"   onChange={this.handleInputChange} />
                                        </div>
                                       
                                    </div>
                                    <button onClick={this.cadastraLivro}>Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        }
    

export default  PerfilLivro;




