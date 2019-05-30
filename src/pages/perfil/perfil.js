import React,{Component} from "react";



export default class Perfil extends Component{
    

    handleSubmit =(e)=> {
        e.preventDefault();
       // alert('A login usuario : ' + this.state.usuario +'\n Senha: '+this.state.senha);
       this.props.history.push('/');
      
      
    }

    render(){
        return (
            <div>
                <h1>Usuario : {this.props.usuario}  </h1>


                <button type="submit" onClick={this.handleSubmit} >Logout</button>
            </div>
        );
    }
}