import React ,{Component} from 'react';
import '../../style.css'






class CardLivroBusca extends Component {



    render() {
        const { titulo,subtitulo,genero,condicao,idioma,imagen,autor} = this.props
        
        return (

            <div className="card mt-6 book" style={{ width: '18em' }}>
                <img src={imagen} className="card-img-top" alt="..." />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item book-title">{titulo}</li>
                    <li className="list-group-item">{subtitulo}</li>
                    <li className="list-group-item">Autor:{autor}</li>
                    <li className="list-group-item">Genero:{genero}</li>
                    <li className="list-group-item">Condição:{condicao}</li>
                    <li className="list-group-item">Idioma:{idioma}</li>
                </ul>
            </div>

        )
    }

}

export default CardLivroBusca;