import React,{Component} from "react";


const nome ="livro";
const genero="aventura";
const condição ="bom";
const idioma="portugues"


class Card_Livro extends Component{

    state={
        nome_livro:'',genero:'',idioma:'',condição:''
    }
   
   
    
   
   
   
    render(){
        return(
            <div>
                
                <label>Nome</label>
                <output name="nome_livro" value={this.state}/>
                <label>Genero</label>
                <output name="genero"/>
                <label>Condição</label>
                <output name="condição"/>
                <label>Idioma</label>
                <output name="nome"/>

            </div>

        )          
        
    }

}

export default Card_Livro;