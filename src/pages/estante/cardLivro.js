import React,{Component} from "react";
import { Card,Button } from 'react-bootstrap';


const nome ="livro";
const genero="aventura";
const condicao ="bom";
const idioma="portugues"






class CardLivro extends Component{

    
   

   
    
   
   
   
    render(){
        return(
            /*
            <Card >
                <div >
                    <div >
                        <img src="tinook.png" class="card-img" alt="..."/>
                    </div>
                    <div >
                        <div class="card-body book-info">
                            <h5 class="card-title">Harry Potter</h5>
                            <p class="card-text">A Ordem da Fênix</p>
                            <p class="card-text">Fantasia, Aventura</p>
                            <p class="card-text">Ótima condição</p>
                            <p class="card-text">Inglês</p>
                        </div>
                    </div>
                </div>
        </Card>
            */

           <Card style={{ width: '18rem' }}>
           <Card.Img variant="left" src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" />
           <Card.Body>
             <Card.Title>Harry Potter</Card.Title>
            
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
