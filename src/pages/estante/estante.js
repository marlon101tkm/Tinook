import React,{Component} from'react';
import { Card,Button,  CardDeck, CardColumns } from 'react-bootstrap';
import CardLivro from './cardLivro.js'



var lista_cards=[];


class Estante extends Component{

    
   
        
     multicards(l){
        for(var i=0;i<l;i++){
         lista_cards.push(<CardLivro/>)
        } 

        return lista_cards;
    }



    render(){
       
        return(
            <CardColumns>
             
            {this.multicards(5)}
               
            </CardColumns>

        )
    }
}

export default Estante;