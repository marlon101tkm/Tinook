import React,{Component} from 'react';
import {  Navbar, Button ,Nav, ButtonGroup,Image} from 'react-bootstrap';
import './style.css'
import { withRouter,Link } from 'react-router-dom'
import Form from 'react-bootstrap/FormControl';
import tinook from './tinook.png'
import { logout } from "./services/auth.js";

class BarraNav extends Component {

    
        retornaIndex(){
            logout()
            this.props.history.push('/');
        }


    
    

    renderiza(){
        
        if(this.props.location.pathname == '/'){
            return (
               

                <Navbar  variant='custom'>
                <Navbar.Brand><Image src={tinook} width="40" height="40" /> {'Tinook'} </Navbar.Brand>
                </Navbar>
            )
        }else{

            return (
                <Navbar /*className='navbar-custom'*/  variant='custom'>
                <Navbar.Brand><Image src={tinook} width="40" height="40" /> {'Tinook'} </Navbar.Brand>
                <ButtonGroup  >
                    <Button  variant='menu'  >Estante</Button>
                    <Button  variant='menu'  >Filtro</Button>
                    <Button  variant='menu' >Perfil</Button>
                </ButtonGroup>
                <Button onClick={this.retornaIndex()}  >Logout</Button>

            </Navbar>

            )
        }



    }




    render(){
        return (
            <div>
            {this.renderiza()}
            </div>
            /*
          
                <Navbar   variant='custom'>
                    <Navbar.Brand><Image src={tinook} width="40" height="40" /> {'Tinook'} </Navbar.Brand>
                    <ButtonGroup  >
                        <Button  variant='menu'  >Estante</Button>
                        <Button  variant='menu'  >Filtro</Button>
                        <Button  variant='menu' >Perfil</Button>
                    </ButtonGroup>

                </Navbar>
         */  
        )
    }



}

export default withRouter(BarraNav); 
//export default BarraNav; 