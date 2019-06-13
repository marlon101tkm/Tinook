import React, { Component } from 'react';
import { Card, Button} from 'react-bootstrap';
import '../../style.css'

const nome = "Harry Potter ea Ordem da Fenix";
const genero = "Fantasia";
const condicao = "Ótima";
const idioma = "portugues"






class CardLivro extends Component {

  
    state={
        titulo:nome ,genero_l: genero,condicao_l: condicao ,idioma_1: idioma
    }
   

 





  render() {
    return (

      <Card className='card-book'>
        <Card.Img    src="https://culturaproximaleitura.com/wp-content/uploads/2014/06/Capa-Harry-Potter-e-a-Ordem-da-F%C3%AAnix-Livro.jpg" />
        <Card.Body>
          <Card.Title>{this.state.titulo} </Card.Title>
          <Card.Text >{this.state.genero_l}</Card.Text>
          <Card.Text >{this.state.condicao_l}</Card.Text>
          <Card.Text >{this.state.idioma_1}</Card.Text>
          
        </Card.Body>
      </Card>


    )

  }

}

export default CardLivro;