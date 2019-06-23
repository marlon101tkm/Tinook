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

    
    

    renderiza(){
        const lugar = this.props.location.pathname;  

        //resnderização condicional barra vazia no index e barra com botões no resto das paginas
        if(lugar === '/'){
            return (
               
              
                <nav class="navbar navbar-dark nav-custom p-2">
                    <p class="m-0">TINOOK</p>
                </nav>
            )
        }else{

            return (

                <nav class="navbar navbar-dark nav-custom p-2">
                    <p class="m-0">TINOOK</p>
                    <div class="d-flex flex-row-reverse bd-highlight">
                        <button type="button" class="btn mr-1 menu-btn" onClick={this.navegaEstante} >Estante</button>
                        <button type="button" class="btn mr-1 menu-btn"onClick={this.navegaFiltro}>Filtro</button>
                        <button type="button" class="btn mr-1 menu-btn"onClick={this.navegaPerfil}>Perfil</button>
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
