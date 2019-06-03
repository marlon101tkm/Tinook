import React,{Component} from'react';
import { Card,Button, CardColumns, CardGroup, CardDeck } from 'react-bootstrap';


const nome ="livro";
const genero="aventura";
const condicao ="bom";
const idioma="portugues"






class CardLivro extends Component{

    state={
        titulo:nome ,genero_l: genero,condicao_l: condicao ,idioma_1: idioma
    }
   

   
    
   
   
   
    render(){
        return(
        
           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=134560&qld=90&l=430&a=-1=1004440431" />
           <Card.Body>
             <Card.Title>Harry Potter {this.state.titulo} </Card.Title>
                            <Card.Text>A Ordem da Fênix</Card.Text>
                            <Card.Text >Fantasia, Aventura</Card.Text>
                            <Card.Text >Ótima condição</Card.Text>
                            <Card.Text >Inglês</Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
        

        )          
        
    }

}

export default CardLivro;