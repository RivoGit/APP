import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Comment from './Comment';
import './App.css';

class Form extends React.Component {

    
    
    handleSubmit (e){
       
       
        e.preventDefault();
       //console.log(e.target[0].value);
       function Commentaire(props)
       {

        function Increment(){
            console.log("ok");
        }
        return (
            <div className='App-comment'>

                <p>{props.commentaire}</p>
                <span onClick={Increment()}>♥</span><span >{props.n}</span>

            </div>
        )
       
    
        }
        const comment = ReactDOM.createRoot(document.getElementById('comment'));
        comment.render(
            <React.StrictMode>
              < Commentaire commentaire = {e.target[0].value} n={0}/>
            </React.StrictMode>
          );
       //console.log (comment.innerHTML = < Commentaire commentaire = {e.target[0].value}/>);

    }

    render(){
        return (
            <div className=''>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id="texte1" className='App-input'placeholder='Ajouter un commentaire'/><span></span><br/>
                    <button  className='App-button' type="submit">Send</button>
                    <hr></hr>
                </form>
            </div>
        );
    }
}

export default Form;