import React, { Component } from 'react';
import BarraNav from'../../barraNav.js'

const noImg ="https://static.thenounproject.com/png/340719-200.png"

class PerfilLivro extends Component{


    render(){
        return(
            <div>
            <BarraNav/>
            <div class="container m-2">
                <div class="row">
                    <div class="col-xs p-5">
                        <img src={noImg} alt="..." class="img-thumbnail main-img"/>
                            <div class="row">
                                <div class="col-sm">
                                    <img src={noImg} alt="..." class="img-thumbnail" />
                                </div>
                                <div class="col-sm">
                                    <img src={noImg} alt="..." class="img-thumbnail" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <img src={noImg} alt="..." class="img-thumbnail" />
                                </div>
                                <div class="col-sm">
                                    <img src={noImg} alt="..." class="img-thumbnail" />
                                </div>
                            </div>
                        
            </div>
                        <div class="col-xs p-5 info-book-section">
                            <div class="row">
                                <div class="col-sm">
                                    <label for="basic-url">I.S.B.N</label>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                                <div class="col-sm">
                                    <label for="basic-url">Language</label>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <label for="basic-url">Título</label>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                                <div class="col-sm">
                                    <label for="basic-url">Condição</label>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <label for="basic-url">Número da edição</label>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                                <div class="col-sm">
                                    <label for="basic-url">Gênero</label>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <label for="basic-url">Número de páginas</label>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                                <div class="col-sm">
                                    <label for="basic-url">Autor</label>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    

        )
    }


}

export default  PerfilLivro;




