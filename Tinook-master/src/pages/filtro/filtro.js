import React,{Component} from "react";
import { Combobox } from 'react-widgets'

const nomeAutor = ['joao','pedro'];

const genero=[{id: 1 , nome: 'romance'}
,
{id:2 ,nome:'fantasia'},
{id:3 ,nome:'terror'},
{id:4 ,nome:'suspense'},
{id:5 ,nome:'comedia'},
{id:6 ,nome:'aventura'},
{id:7 ,nome:'auto ajuda'}];

const num = 0;




class Filtro extends Component{




     opAutores = nomeAutor.map((nomeAutor)=> <option value = {nomeAutor} >{nomeAutor}</option> )

    // opGenero = genero.map((genero)=><option>{genero}</option>)


    /* handleSubmit = (e) =>{
         
     }*/


    render(){
        return(
            
            <div>
            

          <form >
          <label>Distancia:</label>
          <input type="range" />
          </form>
           <label>Autor:</label>
           <select >
               {this.opAutores}
           </select>

            <label>Idioma:</label>
            <select>
                <option value='portugues' >Portugues</option>
                <option value='ingles' >Ingles</option>
            </select><br/>

            
          
            </div>
            

        )
    }
}


/*
  <Combobox  valueField='id' textField='nome' data={genero}/> 
   
            <label>Genero:</label>   
           <select>
               {this.opGenero}
           </select>


 */
export default Filtro;
