import React,{Component} from "react";
import BarraNav from'../../barraNav.js'

const nomeAutor = ['joao','pedro'];

const genero=[{id:1 , nome: 'romance'}
,
{id:2 ,nome:'fantasia'},
{id:3 ,nome:'terror'},
{id:4 ,nome:'suspense'},
{id:5 ,nome:'comedia'},
{id:6 ,nome:'aventura'},
{id:7 ,nome:'auto ajuda'}];






class Filtro extends Component{



    //testando as varieveis globais pra preenchimento das comboboxes
     opAutores = nomeAutor.map((nomeAutor)=> <option value = {nomeAutor} >{nomeAutor}</option> )

     opGenero = genero.map((genero)=><option>{genero.nome}</option>)


    /* handleSubmit = (e) =>{
         
     }*/


    render(){
        return(
            <div>
                <BarraNav/>
                <div class='container mt-5'>
                    <div class="row mb-5">
                        <div class="col">
                            Distância:
            </div>
                        <div class="col">
                            1
                <input type="range" min="0" max="100" />
                            100
            </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col">
                            Gênero:
            </div>
                        <div class="col">
                            <select>
                                <option>Selecione</option>
                                <optgroup>{this.opGenero}</optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col">
                            Autor:
            </div>
                        <div class="col">
                            <select>
                                <option>Selecione</option>
                                <optgroup>{this.opAutores}</optgroup>

                            </select>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col">
                            Language:
            </div>
                        <div class="col">
                            <select>
                                <option>Selecione</option>
                                <option>Portugues</option>
                                <option>Inglês</option>
                                
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Filtro;

