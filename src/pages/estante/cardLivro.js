import React ,{Component} from 'react';
import '../../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt } from '@fortawesome/free-solid-svg-icons'




class CardLivro extends Component{
    
    

  render() {
    // definindo constantes para poder ser acessada pelo componente pai e passadas por parametro para esse componente
    const  titulo = this.props.titulo,
      subtitulo = this.props.subtitulo,
      genero = this.props.genero,
      condicao = this.props.condicao,
      idioma = this.props.idioma,
      imagen = this.props.imagen
    return (

      <div class="card mt-5 book-card" style={{ maxWidth: 540 }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={imagen} class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body book-info">

              <button class="fas fa-edit edit-icon" > <FontAwesomeIcon icon={faEdit} /> </button>
              <button class="fas fa-trash-alt delete-icon"><FontAwesomeIcon icon={faTrashAlt} /> </button>
              <h5 class="card-title">{titulo}</h5>
              <h6 class="card-title">{subtitulo}</h6>
              <p class="card-text"> Genero:{genero}</p>
              <p class="card-text">Condição:{condicao}</p>
              <p class="card-text">idioma:{idioma}</p>
            </div>
          </div>
        </div>
      </div >

    );
  }
  
}




export default CardLivro;