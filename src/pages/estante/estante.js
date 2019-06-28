import React,{Component} from'react';
import { CardColumns } from 'react-bootstrap';
import CardLivro from './cardLivro.js'
import BarraNav from'../../barraNav.js'
import api from '../../services/api.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'




var lista_infoE = [
    {
        titulo: " Harry Potter ",
        subtitulo:"e a Ordem da Fenix",
        genero: "Fantasia",
        condicao: " Ótima",
        idioma: " Portugues",
        imagen: 'https://statics.livrariacultura.net.br/products/capas_lg/628/46583628.jpg',
        autor: "J.K. Rowling"
    },
    {
        titulo: " O Festim dos Corvos ",
        subtitulo:"As Cronicas do Gelo e Fogo Livro Quatro",
        genero: "Fantasia",
        condicao: " Boa",
        idioma: " Portugues",
        imagen: "https://vignette.wikia.nocookie.net/gameofthrones/images/6/64/Capa_Festim_dos_Corvos.jpg/revision/latest?cb=20171018135729&path-prefix=pt-br",
        autor: "George R.R. Martin"
    },
    {
        titulo: " O Senhor dos Aneis",
        subtitulo:" O Retorno do Rei",
        genero: "Fantasia",
        condicao: " Regular",
        idioma: " Portugues",
        imagen: "https://livrosdefantasia.files.wordpress.com/2012/04/o-retorno-do-rei.jpg",
        autor: "J.R.R. Tokien"
    },
    {
        titulo: " Harry Potter ",
        subtitulo:"e a Ordem da Fenix",
        genero: "Fantasia",
        condicao: " Ótima",
        idioma: " Portugues",
        imagen: 'https://statics.livrariacultura.net.br/products/capas_lg/628/46583628.jpg',
        autor: "J.K. Rowling"
    },
    {
        titulo: " O Festim dos Corvos ",
        subtitulo:"As Cronicas do Gelo e Fogo Livro Quatro",
        genero: "Fantasia",
        condicao: " Boa",
        idioma: " Portugues",
        imagen: "https://vignette.wikia.nocookie.net/gameofthrones/images/6/64/Capa_Festim_dos_Corvos.jpg/revision/latest?cb=20171018135729&path-prefix=pt-br",
        autor: "George R.R. Martin"
    },
    {
        titulo: " O Senhor dos Aneis",
        subtitulo:" O Retorno do Rei",
        genero: "Fantasia",
        condicao: " Regular",
        idioma: " Portugues",
        imagen: "https://livrosdefantasia.files.wordpress.com/2012/04/o-retorno-do-rei.jpg",
        autor: "J.R.R. Tokien"
    },
    {
        titulo: " Harry Potter ",
        subtitulo:"e a Ordem da Fenix",
        genero: "Fantasia",
        condicao: " Ótima",
        idioma: " Portugues",
        imagen: 'https://statics.livrariacultura.net.br/products/capas_lg/628/46583628.jpg',
        autor: "J.K. Rowling"
    },
    {
        titulo: " O Festim dos Corvos ",
        subtitulo:"As Cronicas do Gelo e Fogo Livro Quatro",
        genero: "Fantasia",
        condicao: " Boa",
        idioma: " Portugues",
        imagen: "https://vignette.wikia.nocookie.net/gameofthrones/images/6/64/Capa_Festim_dos_Corvos.jpg/revision/latest?cb=20171018135729&path-prefix=pt-br",
        autor: "George R.R. Martin"
    },
    {
        titulo: " O Senhor dos Aneis",
        subtitulo:" O Retorno do Rei",
        genero: "Fantasia",
        condicao: " Regular",
        idioma: " Portugues",
        imagen: "https://livrosdefantasia.files.wordpress.com/2012/04/o-retorno-do-rei.jpg",
        autor: "J.R.R. Tokien"
    },
    {
        titulo: " Harry Potter ",
        subtitulo:"e a Ordem da Fenix",
        genero: "Fantasia",
        condicao: " Ótima",
        idioma: " Portugues",
        imagen: 'https://statics.livrariacultura.net.br/products/capas_lg/628/46583628.jpg',
        autor: "J.K. Rowling"
    },
    {
        titulo: " O Festim dos Corvos ",
        subtitulo:"As Cronicas do Gelo e Fogo Livro Quatro",
        genero: "Fantasia",
        condicao: " Boa",
        idioma: " Portugues",
        imagen: "https://vignette.wikia.nocookie.net/gameofthrones/images/6/64/Capa_Festim_dos_Corvos.jpg/revision/latest?cb=20171018135729&path-prefix=pt-br",
        autor: "George R.R. Martin"
    },
    {
        titulo: " O Senhor dos Aneis",
        subtitulo:" O Retorno do Rei",
        genero: "Fantasia",
        condicao: " Regular",
        idioma: " Portugues",
        imagen: "https://livrosdefantasia.files.wordpress.com/2012/04/o-retorno-do-rei.jpg",
        autor: "J.R.R. Tokien"
    }

    
];

//var qtd_livro ;
class Estante extends Component{
   
    constructor(props){
        super(props)
       
        this.state={
            lista_cards: [],
           lista_info: []
            
        }
       
    }



     //teste com as variaveis globais desse componente
    

    componentDidMount() {
        
        var lista =[]; 
        for (var livro in lista_infoE) {

         lista.push(<CardLivro titulo={lista_infoE[livro].titulo}
            subtitulo={lista_infoE[livro].subtitulo}
            genero={lista_infoE[livro].genero}
            condicao={lista_infoE[livro].condicao}
            idioma={lista_infoE[livro].idioma}
            imagen={lista_infoE[livro].imagen}
            autor={lista_infoE[livro].autor}/> )
         
         
        }
        this.setState({lista_info: lista})
        
    }


    


/*

    //preenchimento da lista com a requisição no banco sem autenticação de usuario
    componentDidMount() {
       
        var lista =[]; 
        api.get(`/livro`).then(res =>{
            
             const lista_info = res.data;
             console.log(lista_info.titulo);
             
             for (var livro in lista_info) {
     
              lista.push(<CardLivro titulo={lista_info[livro].titulo}
                 subtitulo={lista_info[livro].subtitulo}
                 genero={lista_info[livro].genero}
                 condicao={lista_info[livro].condicao}
                 idioma={lista_info[livro].lingua}
                 imagen={lista_info[livro].imagen}/> )
              
              
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
                <div class="container">
                    
                    <div class="card-columns">

                        {this.state.lista_info}

                        <div class="col">
                            <div class="card mt-3 book-card" style={{ maxWidth: "540px" }}>
                                <div class="row no-gutters">
                                    <div class="col-md-12">
                                        <button class="fas fa-plus plus-icon"><FontAwesomeIcon icon={faPlus}/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
        
export default Estante;