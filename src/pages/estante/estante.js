import React,{Component} from'react';
import { Card,Button,  CardDeck, CardColumns } from 'react-bootstrap';
import CardLivro from './cardLivro.js'
import api from '../../services/api.js';




var lista_cards=[];


class Estante extends Component{

    state={
        qtd_usuario: "",
    }



/*
    componentDidMount() {
        api.get(`/usuario/count`)
          .then(res => {
            const qtd_usuario = res.data;
            this.setState({ qtd_usuario });
          })
        



      }
   */
        
     multicards(l){
        for(var i=0;i<l;i++){
         lista_cards.push(<CardLivro/>)
        } 

        return lista_cards;
    }



    render(){
       
        return(
            <CardColumns>
             
            {this.multicards(10)}
               
            </CardColumns>

        )
    }
}

export default Estante;