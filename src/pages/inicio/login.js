import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'

 class Login extends Component{
 /*  constructor(props){
        super(props);
        this.state={
            usuario: '',senha: ''
        }
   }
   */
   
    state={
        usuario: '',senha: ''
    }
    
    handleSubmit = e => {
        const{usuario,senha} = this.state;
       // if( !this.state.usuario || !this.state.senha ){
        if( usuario || senha ){   
            e.preventDefault();
            // alert('A login usuario : ' + this.state.usuario +'\n Senha: '+this.state.senha);

            this.props.history.push('/Perfil');
        }
      
    }

    handleInputChange =(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    
    


    render(){
        return(
            <div>
             
               <form>
                <input type='text' 
                name='usuario' 
                placeholder='Usuario' 
               
                onChange={ this.handleInputChange}/><br/>

                <input type='password'
                 name='senha'
                 placeholder='Senha'
               
                 onChange={ this.handleInputChange}/><br/>

                <button  type='submit'   /* onClick={this.handleSubmit}*/ >Login</button>
               </form>
           </div> 
        )
    }
}

export default (Login)