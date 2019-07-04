import React,{Component} from'react';
import CardMatch from './cardMatch.js'
import BarraNav from'../../barraNav.js'
//import api from '../../services/api.js'





const lista_infoE = [
    {
        tituloRecebeuLike: "Harry Potter e a Orndem da Fenix",
        tituloDeuLike: "Senhor dos aneis O Retorno do Rei",
        usuario: "joaoIsk",
    },
    
    {
        tituloRecebeuLike: "Harry Potter e a Orndem da Fenix",
        tituloDeuLike: "Senhor dos aneis O Retorno do Rei",
        usuario: "pedro 123",
    },
    {
        tituloRecebeuLike: "Harry Potter e a Orndem da Fenix",
        tituloDeuLike: "Senhor dos aneis O Retorno do Rei",
        usuario: "lucas239",
    },
];

class  ListaMatch extends Component{
   
    constructor(props){
        super(props)
       
        this.state={
            lista_cards: [],
          listaMatch: []
            
        }
       
    }



     //teste com as variaveis globais desse componente
    

    componentDidMount() {
        
        var lista =[]; 
        for (var i in lista_infoE) {

         lista.push(<CardMatch 
            key={i}
            tituloRecebeuLike={lista_infoE[i].tituloRecebeuLike}
            tituloDeuLike={lista_infoE[i].tituloDeuLike}
            usuario={lista_infoE[i].usuario}
           
           /> )
         
         
        }
        this.setState({lista_info: lista})
        
    }


    


    /*

    //preenchimento da lista com a requisição no banco sem autenticação de usuario
    componentDidMount() {
        var lista =[],listaMatch=[];
        api.get('/match').then(res=>{
            const lista_Match=res.data 
            for (var i in lista_Match) {
                if(listaMatch[i].usuario_id === 1){
                    listaMatch.push(lista_Match[i])
                }
            }
        })
        api.get('/livro',{
        })
        .then(res =>{
            
             const lista_info = res.data;
             console.log(lista_info.titulo);
             for (var livro in lista_info) {
               if(lista_info[livro].usuario_id === 1){

                   lista.push(<CardMatch
                       tituloRecebeuLike={lista_infoE[livro].tituloRecebeuLike}
                       tituloDeuLike={lista_infoE[livro].tituloDeuLike}
                       usuario={lista_infoE[livro].usuario} />)
                
               }
             }
             this.setState({lista_info: lista})

        })  

      }
   */
      

      /*estou utilizando o card columns pq ele organiza os cards automaticamente senão teria que implementar
        todo um tratamento para organizar as colunas */
    render() {

        return (
            <div>
                <BarraNav />
                <div className ="container">
                    
                    <div className ="card-columns">

                        {this.state.lista_info}

                    </div>
                </div>

            </div>

        )
    }
}
        
export default ListaMatch;