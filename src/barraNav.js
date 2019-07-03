import React,{Component} from 'react';
import './style.css'
import { withRouter} from 'react-router-dom'
import { logout } from "./services/auth.js";


class BarraNav extends Component {

    
    //funçoes de navegação chamadas em cada botao da barra


        retornaIndex=  (e) => {
            e.preventDefault();
            logout()
            this.props.history.push('/');
        }

        
    navegaEstante =  (e) => {
        e.preventDefault();
        this.props.history.push('/estante');
    }

    navegaPerfil =  (e) => {
        e.preventDefault();
        this.props.history.push('/perfil');
    }

    navegaFiltro =  (e) => {
        e.preventDefault();
        this.props.history.push('/filtro');
    }

    navegaBusca =  (e) => {
        e.preventDefault();
        this.props.history.push('/busca');
    }

    

    
    

    renderiza(){
        const lugar = this.props.location.pathname;  

        //resnderização condicional barra vazia no index e barra com botões no resto das paginas
        if(lugar === '/'){
            return (
               
              
                <nav className="navbar navbar-dark nav-custom p-2">
                    <p className="m-0">TINOOK</p>
                </nav>
            )
        }else{

            return (

                <nav className="navbar navbar-dark nav-custom p-2">
                    <p className="m-0">TINOOK</p>
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <button type="button" className="btn mr-1 menu-btn" onClick={this.retornaIndex} >Sair</button>
                        <button type="button" className="btn mr-1 menu-btn" onClick={this.navegaEstante} >Estante</button>
                        <button type="button" className="btn mr-1 menu-btn"onClick={this.navegaFiltro}>Filtro</button>
                        <button type="button" className="btn mr-1 menu-btn"onClick={this.navegaPerfil}>Perfil</button>
                        <button type="button" className="btn mr-1 menu-btn"onClick={this.navegaBusca}>Busca</button>
                    </div>
                </nav>



            )
        }



    }




    render(){
        return (
            <div>
            {this.renderiza()}
            </div>
           
        )
    }



}

export default withRouter(BarraNav); 
