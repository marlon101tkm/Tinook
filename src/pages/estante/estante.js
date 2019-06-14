import React,{Component} from'react';
import { CardColumns } from 'react-bootstrap';
import CardLivro from './cardLivro.js'
import api from '../../services/api.js';
import BarraNav from'../../barraNav.js'



var lista_cards=[];
var lista_info=[{
        titulo:"",genero:"",condicao:"",idioma:""
}];
var qtd_livro ;
class Estante extends Component{
    constructor(props){
        super(props)
       /*
        this.state={
            lista_info: [],
            qtd_livro: 0
            
        }
        */
    }
    




    componentDidMount() {
        api.get(`/livro/count`)
          .then(res => {
            //const qtd_livro = res.data;
           // this.setState( {qtd_livro: res.data });
           qtd_livro = res.data;
          // console.log(qtd_livro) 
            

          })
        api.get(`/livro`).then(res =>{
            
             lista_info = res.data;
             console.log(lista_info.titulo);
           // alert(lista_info);
            //this.setState({ lista_info: res.data });
        })  
        



      }
   /*
        
     multicards(l){
        for(var i=0;i<l;i++){

         lista_cards.push(<CardLivro  />)
        } 

        return lista_cards;
    }

*/

multicards(){
    for(var livro in lista_info ){
     console.log(livro +"="+ lista_info[livro])

    // lista_cards.push(<CardLivro titulo={} genero_l={livro.genero}/>)
    } 
    

    return lista_cards;
}


    render(){
       
        return(
            <div>
            <BarraNav/>
            <CardColumns>
             
            {this.multicards()}
               
            </CardColumns>
            </div>
        )
    }
}

export default Estante;