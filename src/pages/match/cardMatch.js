import React ,{Component} from 'react';
import '../../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit , faTrashAlt } from '@fortawesome/free-solid-svg-icons'




class  CardLivro extends Component{
    
    

  render() {
    // definindo constantes para poder ser acessada pelo componente pai e passadas por parametro para esse componente
    const  tituloRecebeuLike = this.props.tituloRecebeuLike,
          tituloDeuLike = this.props.tituloDeuLike,
          usuario = this.props.usuario
     
    return (

      <div className ="card mt-5 book-card" style={{ maxWidth: "540px" }}>
        <div className ="row no-gutters">
          <div className ="col-md-8">
            <div className ="card-body book-info">
              <h6 className ="card-title">Seu Livro:  {tituloRecebeuLike}</h6>
              <h6 className ="card-title">Livro que você deu like:  {tituloDeuLike}</h6>
              <p className ="card-text">Usuario:  {usuario}</p>

            </div>
          </div>
        </div>
      </div >

    );
  }
  
}




export default CardLivro;