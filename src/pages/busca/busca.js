import React ,{Component} from 'react';
import '../../style.css'
import CardLivroBusca from './cardLivroBusca.js'
import BarraNav from'../../barraNav.js'


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




class Busca extends Component{
    
    constructor(props){
        super(props)
       
        this.state={
            card_livro : [],
           lista_info :  [],
           index: 0
            
        }

        this.proximoLivro = this.proximoLivro.bind(this);
       
    }

    
    componentDidMount() {
        
        var lista =[]; 
        for (var livro in lista_infoE) {

         lista.push(<CardLivroBusca titulo={lista_infoE[livro].titulo}
            subtitulo={lista_infoE[livro].subtitulo}
            genero={lista_infoE[livro].genero}
            condicao={lista_infoE[livro].condicao}
            idioma={lista_infoE[livro].idioma}
            autor={lista_infoE[livro].autor}
            imagen={lista_infoE[livro].imagen}/> )
         
         
        }
        this.setState({lista_info: lista})
        
    }
    /*
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.lista_info !== prevProps.lista_info) {
         
        }
      }
*/


    proximoLivro() {
        if (this.state.index == this.state.lista_info.length - 1)
            return;

        this.setState(prevState => ({
            index: prevState.index + 1
        }))
    }
    




    render() {
        const {lista_info, index} = this.state;
        return (
            <div >
                <BarraNav />
                <div className="container">
                    {lista_info[index]}
                    <div class="row">
                        <button type="button" onClick={this.proximoLivro} class="btn btn-outline-success col m-3">Sim</button>
                        <button type="button" class="btn btn-outline-danger col m-3">Não</button>
                        <button type="button" class="btn btn-outline-primary col m-3">Já li</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Busca;