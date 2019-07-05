import React ,{Component} from 'react';
import '../../style.css'
import CardLivroBusca from './cardLivroBusca.js'
import BarraNav from'../../barraNav.js'
import api from '../../services/api.js'
import { async } from 'q';


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
    }
   

];




class  Busca extends Component{
    
    constructor(props){
        super(props)
       
        this.state={
            card_livro : [],
           lista_info :  [],
           index: 0
            
        }

        this.proximoLivro = this.proximoLivro.bind(this);
       
    }
    
   
    //busca do os livros no banco
    
    componentDidMount() {

        var lista = [];
        api.get(`/livro`)
            .then(res => {

                const lista_info = res.data;
                console.log(lista_info.titulo);

                for (var i in lista_info) {

                    if (lista_info[i].usuario_id !== 2) {

                        lista.push(<CardLivroBusca 
                            key={i}
                            titulo={lista_info[i].titulo}
                            subtitulo={lista_info[i].subtitulo}
                            genero={lista_info[i].genero}
                            condicao={lista_info[i].condicao}
                            idioma={lista_info[i].lingua}
                            imagen={lista_info[i].imagen}
                            id={lista_info[i].id}
                            usuario_id={lista_info[i].usuario_id} />)
                    }
                }
                this.setState({ lista_info: lista });
                this.setState({ card_livro: res.data });
            })
    }

    
      /*
    
    //preenchimento com dados estaticos
    componentDidMount() {
        
        var lista =[]; 
        for (var i in lista_infoE) {

         lista.push(<CardLivroBusca titulo={lista_infoE[i].titulo}
            subtitulo={lista_infoE[i].subtitulo}
            genero={lista_infoE[i].genero}
            condicao={lista_infoE[i].condicao}
            idioma={lista_infoE[i].idioma}
            autor={lista_infoE[i].autor}
            imagen={lista_infoE[i].imagen}/> )
         
         
        }
        this.setState({lista_info: lista})
        
    }

*/
    

    //mostra o proximo livro da lista 
    proximoLivro() {
        if (this.state.index === this.state.lista_info.length - 1){
            this.setState({index: 0})
            return;
        }
        this.setState(prevState => ({
            index: prevState.index + 1
        }))
    }
    

    // insere no banco no banco o like
    darLike = async (e)=> {     
        e.preventDefault();
        
        const {card_livro,index} = this.state
        //console.log(card_livro[index].nome);
        try{
            await api.post('/gostei',{
                livro_id: card_livro[index].id, 
                usuario_id: 1,
                data_gostei: new Date()    
            });
            this.proximoLivro();
        }catch(err) {
            console.log(err);

        }
        
    }

    // insere no banco  o livro já lido
    jaLeu= async (e)=> {     
        e.preventDefault();
        const {card_livro,index} = this.state
        //console.log(card_livro[index].nome);
        try{
            await api.post('/leu',{
                isbn: card_livro[index].isbn, 
                usuario_id: 1});
            this.proximoLivro();
        }catch(err) {
            console.log(err);

        }
        
    }



    render() {
        const {lista_info, index} = this.state;
        return (
            <div >
                <BarraNav />
                <div className ="container">
                    {lista_info[index]}
                    <div className ="row">
                        
                        <button type="button" onClick={this.proximoLivro} className ="btn btn-outline-danger col m-3">Não</button>
                        <button type="button" onClick={this.jaLeu} className ="btn btn-outline-primary col m-3">Já li</button>
                        <button type="button" onClick={this.darLike} className ="btn btn-outline-success col m-3">Gostei</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Busca;