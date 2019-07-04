import React,{Component} from "react";
import BarraNav from'../../barraNav.js'
import api from '../../services/api.js'

const nomeAutor = ['J.K.Rowling','George R.R. Martin','J.R.R.Tokien'];
/*
const genero=[{id:1 , nome: 'romance'}
,
{id:2 ,nome:'fantasia'},
{id:3 ,nome:'terror'},
{id:4 ,nome:'suspense'},
{id:5 ,nome:'comedia'},
{id:6 ,nome:'aventura'},
{id:7 ,nome:'auto ajuda'}];
*/

const genero=['romance',
'fantasia',
'terror',
'suspense',
'comedia',
'aventura',
'auto ajuda'];




 //var autores = [];
class  Filtro extends Component{

   
        state={
        
            //opGenero: [],
            lingua: "",
            autor: "" , 
            genero: "",
           // autores: []
    
        }
   
        /*
    componentDidMount(){
         api.get('/autor')
        .then(res =>{
            this.state.autores = res.data
           // this.setState({autores: res.data})
            console.log(this.state.autores)
        })
           // console.log(this.state.autores)  
        */

        //this.setState({opGenero: genero.map((genero)=><option name={genero} >{genero}</option>)})
        //console.log(this.state.opGenero[1].nome)
          
     //   this.setState({opAutores: this.state.autores.map((autor)=> <option  key={autor.id} value = {autor.id} >{autor.nome}</option> ) })
       // console.log(this.state.opAutores)
    

     //opAutores = this.state.autores.map((autor)=> <option  key={autor} value = {autor.id} >{autor.nome}</option>)
    
    
    //testando as varieveis globais pra preenchimento das comboboxes
     //opAutores = autores.map((autor)=> <option  key={autor.id} value = {autor.id} >{autor.nome}</option> )

     opGenero = genero.map((genero)=><option name={genero} >{genero}</option>)
     opAutores= nomeAutor.map((autor)=> <option >{autor}</option>)

     handleInputChange = (e) => {
         if (e.target.value !== 'Selecione') {
             this.setState({ [e.target.name]: e.target.value });
            // console.log({ [e.target.name]: e.target.value })

         }

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {genero,lingua,autor} = this.state;
        var jaExiste,autor_id,filtro_id;
        api.get("/filtro").then(res=>{
            const lista = res.data;
            for(var i in lista){
                if(lista[i].usuario_id === 1){
                    jaExiste = true;
                    filtro_id=lista[i].id

                }
            }

        })
        api.get("/autor").then(res=>{
            const lista = res.data;
            for(var i in lista){
                if(lista[i].nome === autor){
                    autor_id = lista[i].id;
                    
                }
            }

        })
        console.log(autor_id)
        if(jaExiste){
            api.put("/filtro",{id: filtro_id ,lingua, genero , autor_id})
        }else{
            api.post("/filtro",{lingua, genero , autor_id})
        }

    }

   


    render(){
       // opAutores= this.state.autores.map((autor)=> <option >{autor}</option>)
        return(
            <div>
                <BarraNav />
                <div className='container mt-5'>
                    <div className="row mb-5">
                        <div className="col">
                            Distância:
            </div>
                        <div className="col">
                            1
                <input type="range" min="0" max="100" />
                            100
            </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col">
                            Gênero:
            </div>
                        <div className="col">
                            <select name="genero" onClick={this.handleInputChange} >
                                <option>Selecione</option>
                                <optgroup>{this.opGenero}</optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col">
                            Autor:
            </div>
                        <div className="col">
                            <select name="autor" onClick={this.handleInputChange} >
                                <option>Selecione</option>
                                <optgroup>{this.opAutores}</optgroup>

                            </select>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col">
                            Idioma:
            </div>
                        <div className="col">
                            <select name="lingua" onClick={this.handleInputChange} >
                                <option>Selecione</option>
                                <option>Portugues</option>
                                <option>Inglês</option>

                            </select>
                        </div>
                    </div>
                    <button type='button' onClick={this.handleSubmit} >Salvar</button>
                </div>
            </div>

        )
    }
}

export default Filtro;

