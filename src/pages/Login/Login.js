import React,{Component} from 'react';


export default class Login extends Component{
   /*constructor(props){
        super(props);
        this.state={
            usuario: '',senha: ''
        }
   }*/
    state={
        usuario: '',senha: ''
    }
    handleSubmit =(e)=> {
        if(this.state.usuario !=='' && this.state.senha !=='' ){
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
            <div id="main-container">
             
               <form>
                <input type='text' 
                name='usuario' 
                placeholder='Usuario' 
               // value={this.state.usuario} 
                onChange={ this.handleInputChange}/><br/>

                <input type='password'
                 name='senha'
                 placeholder='Senha'
                // value={this.state.senha}
                 onChange={ this.handleInputChange}/><br/>

                <button type="submit" onClick={this.handleSubmit} >Login</button>
               </form>
           </div> 
        )
    }
}