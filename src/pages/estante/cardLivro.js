import React ,{Component} from 'react';
import '../../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { async } from 'q';
import api from '../../services/api.js'





class  CardLivro extends Component{
    /*
    state={
      id: "", isbn:"",
      titulo: "" ,
      subtitulo: "" ,
      genero: "" ,
      condicao: "" ,
      idioma: "" ,
      imagen: "" ,
      autor: "" ,
      
    }
    


    //teste para deletar o livro do banco 
  
  deletaLivro = async (e) => {
    var id_livro_foto
    try {
      await api.get("/livro_foto").then(res => {
        const lista_livro = res.data;
        for (var i in lista_livro) {
          if (lista_livro[i].isbn == this.state.isbn) {
              id_livro_foto = lista_livro[i].id
          }
        }
      })
      console.log(id_livro_foto)
    } catch (err) {
      console.log(err)
    }

    try {
      await api.delete("/livro_foto", { id: id_livro_foto })
    } catch (err) {
      console.log(err)
    }

    try {
      await api.delete("/livro", { id: this.state.id })
    } catch (err) {
      console.log(err)
    }


  }
    
  */
 /*

  componentDidMount(){
    this.setState({id: this.props.id})
    this.setState({isbn: this.props.isbn})
  }
*/

  render() {
    // definindo constantes para poder ser acessada pelo componente pai e passadas por parametro para esse componente

      const { titulo, subtitulo,genero, condicao,idioma,imagen,autor} = this.props

    return (

      <div className="card mt-5 book-card" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={imagen} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body book-info">

              <i className="fas fa-edit edit-icon" > <FontAwesomeIcon icon={faEdit} /> </i>
              <i className="fas fa-trash-alt delete-icon" onClick={this.deletaLivro} ><FontAwesomeIcon icon={faTrashAlt} /> </i>
              <h6 className="card-title">{titulo}</h6>
              <h6 className="card-title">{subtitulo}</h6>
              <p className="card-text">Autor:{autor}</p>
              <p className="card-text"> Genero:{genero}</p>
              <p className="card-text">Condição:{condicao}</p>
              <p className="card-text">idioma:{idioma}</p>
            </div>
          </div>
        </div>
      </div >

    );
  }
  
}




export default CardLivro;