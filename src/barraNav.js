import React,{Component} from 'react';
import {  Navbar, Button ,Nav, ButtonGroup,Image} from 'react-bootstrap';
import './style.css'
import { withRouter,Link } from 'react-router-dom'
import Form from 'react-bootstrap/FormControl';
import tinook from './tinook.png'

class BarraNav extends Component {

    

    renderiza(){
        
        if(this.props.location.pathname = '/'){
            return (
               

                <Navbar className='nav-custom'>
                    <Navbar.Brand> Tinook </Navbar.Brand>
                   
                       
                        <Form inline >
                            <Button className='menu-btn' >Estante</Button>
                            <Button >Filtro</Button>
                            <Button  >Perfil</Button>
                        </Form>
                   
                </Navbar>
            )
        }else{

            return (
                <Navbar className='nav-custom'>
                    <Navbar.Brand> Tinook </Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link>Estante</Nav.Link>
                            <Nav.Link>Filtro</Nav.Link>
                            <Nav.Link>Perfil</Nav.Link>
                        </Nav>


                        <Form inline >
                            <Button className='menu-btn' >Estante</Button>
                            <Button >Filtro</Button>
                            <Button  >Perfil</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            )
        }



    }




    render(){
        return (
            <nav>
                <Navbar variant='custom'>
                    <Navbar.Brand><Image src={tinook} width="40" height="40" /> {'Tinook'} </Navbar.Brand>
                    <ButtonGroup  >
                        <Button  variant='menu'  >Estante</Button>
                        <Button  variant='menu'  >Filtro</Button>
                        <Button  variant='menu' >Perfil</Button>
                    </ButtonGroup>

                </Navbar>
            </nav>
        )
    }



}

export default withRouter(BarraNav); 
//export default BarraNav; 