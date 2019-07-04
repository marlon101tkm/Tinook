import React ,{Component} from 'react';
import '../../style.css'




class  CardLivro extends Component{
    
    

  render() {
    // definindo constantes para poder ser acessada pelo componente pai e passadas por parametro para esse componente
    
  
    const{ tituloRecebeuLike, tituloDeuLike , usuario} =this.props;
     
    return (

      <div className="card mt-5 book-card" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          
          <div className="col">
            <div className="card-body book-info">
              <h6 className="card-title">Seu Livro:</h6>
              <h5 className="card-title">{tituloRecebeuLike}</h5>
              <h6 className="card-title">Livro que você deu like:  </h6>
              <h5 className="card-title">{tituloDeuLike}</h5>
              <p className="card-text">Usuario:  {usuario}</p>
            </div>
          </div>
        </div>
      </div >

    );
  }
  
}




export default CardLivro;