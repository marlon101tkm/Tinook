import React,{Component} from'react';
import CardLivro from './cardLivro.js'
import BarraNav from'../../barraNav.js'
import api from '../../services/api.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import '../../style.css'



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

    
];

//var qtd_livro ;
class  Estante extends Component{
   
    constructor(props){
        super(props)
       
        this.state={
            lista_cards: [],
           lista_info: []
            
        }
       
    }



     //teste com as variaveis globais desse componente
    
    /*
    componentDidMount() {
        
        var lista =[]; 
        for (var i in lista_infoE) {

         lista.push(<CardLivro 
            key={i}
            titulo={lista_infoE[i].titulo}
            subtitulo={lista_infoE[i].subtitulo}
            genero={lista_infoE[i].genero}
            condicao={lista_infoE[i].condicao}
            idioma={lista_infoE[i].idioma}
            imagen={lista_infoE[i].imagen}
            autor={lista_infoE[i].autor}/> )
         
         
        }
        this.setState({lista_info: lista})
        
    }
*/
    
    




    //preenchimento da lista com a requisição no banco sem autenticação de usuario
    componentDidMount() {
        //var lista_livro = [], lista_autor_livro=[] , lista=[],lista_autor=[];
        var lista=[]
        try {
            api.get(`/livro`)
                .then(res => {
                    const lista_info = res.data;
                    //console.log(lista_info)
                    for (var i in lista_info) {
                        console.log(lista_info[i].usuario_id == 1)
                        if (lista_info[i].usuario_id === 1) {

                            lista.push(<CardLivro
                                key={i}
                                titulo={lista_info[i].titulo}
                                subtitulo={lista_info[i].subtitulo}
                                genero={lista_info[i].genero}
                                condicao={lista_info[i].condicao}
                                idioma={lista_info[i].lingua}
                                imagen={lista_info[i].imagen}
                                autor={lista_info[i].autor} />)
                        }
                    }
                    this.setState({ lista_info: lista })
                })
           

        } catch (err) {
            console.log(err)
        }
                
        /*

        try {
            api.get(`/livro`)
                .then(res => {
                    const lista_info = res.data;
                   // console.log(lista_info.titulo);
                    for (var i in lista_info) {
                        if (lista_info[i].usuario_id === 1) {
                            //console.log(lista_info[i])
                            lista_livro.push(lista_info[i])
                        }
                    }  
                })
                api.get(`/autor_livro`)
                .then(res=>{
                    lista_autor_livro =  res.data
                    console.log(lista_autor_livro)
                })  
                /*
                api.get(`/autor/${2}`)
                .then(res=>{
                    lista_autor =  res.data
                    console.log(res.data)
                })  
                    

                for(var i = 0 ; i< lista_livro.length;i++){
                    console.log(lista_livro[i].id)
                    for(var j = 0 ;j< lista_autor_livro.length ; j++){

                        //console.log(lista_livro[i].id)
                      
                        
                        if(lista_livro[i].id === lista_autor_livro[j].livro_id){
                            api.get(`/autor/${lista_autor_livro[j].autor_id}`)
                            .then(res=>{
                               
                            })
                        }
                      //  console.log(lista_autor_livro[j])
                    }   
                    lista.push(<CardLivro titulo={lista_livro[i].titulo}
                        subtitulo={lista_livro[i].subtitulo}
                        genero={lista_livro[i].genero}
                        condicao={lista_livro[i].condicao}
                        idioma={lista_livro[i].idioma}
                        imagen={lista_livro[i].imagen}
                        autor={lista_livro[i].autor}/> )
                }
                this.setState({ lista_info: lista })
                 }catch (err){
            console.log(err)
        }
               
        */
    }

      cadastraLivro =  (e) => {
            e.preventDefault();
            this.props.history.push('/perfilLivro');
        }
      

      /*estou utilizando o card columns pq ele organiza os cards automaticamente senão teria que implementar
        todo um tratamento para organizar as colunas */

    render(){

        return (
            <div>
                <BarraNav />
                <div className ="container">
                    
                    <div className ="card-columns">

                        {this.state.lista_info}

                        <div className ="col">
                            <div className ="card mt-3 book-card" style={{ maxWidth: "540px" }}>
                                <div className ="row no-gutters">
                                    <div className ="col-md-12">
                                        <button className ="fas fa-plus plus-icon" onClick={this.cadastraLivro} ><FontAwesomeIcon icon={faPlus}/></button>
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