import React,{Component} from "react";
import { Combobox } from 'react-widgets'

const nomeAutor = ['joao','pedro'];

const genero=['romance','fantasia','terror','suspense','comdeia','aventura','auto ajuda'];






class Filtro extends Component{




     //opAutores = nomeAutor.map((nomeAutor)=> <option>{nomeAutor}</option> )

     //opGenero = genero.map((genero)=><li>{genero}</li>)


    render(){
        return(

            <div>
            
            
            
            <label>Genero:</label>
            <Combobox placeholder="Genero" data={genero}/>    
            <label>Autor:</label>
            <Combobox data={nomeAutor}/> 

            <label>Idioma:</label>
            <select>
                <option value='portugues' >Portugues</option>
                <option value='ingles' >Ingles</option>
            </select><br/>
            </div>

        )
    }
}


export default Filtro;
