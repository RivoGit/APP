//import logo from './logo.svg';
import React from "react";
import { useState } from "react";
import './css/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AjoutCommentaire from "./pages/AjoutCommentaire";
import ListeCommentaire from "./pages/ListeCommentaire";
import { v4 as uuidv4 } from "uuid";

const App = () => {
const [data, setData] = useState([]);

const ajoutCommentaire = (commentaire) =>{
  console.log('commentaire',commentaire);
  setData([...data, {...commentaire,commentaireid:uuidv4()}]);
  console.log(commentaire);
}

const handleDelete = (id) =>{
  setData(data.filter((comm)=>comm.commentaireid !== id));
}

const resultRecherche = (text) => {
  //console.log(text.recherche);
  setData(data.filter((comm)=>comm.commentaire.toLowerCase().includes(text.recherche.toLowerCase())));
}



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/ajoutcommentaire" element = {<AjoutCommentaire ajoutCommentaire = {ajoutCommentaire} />} />
        <Route path="listescommentaires" element = {<ListeCommentaire commentaires= {data} handleDelete =  {handleDelete} resultRecherche = {resultRecherche} />} />
      </Routes>
   
    </BrowserRouter>
    
  );
}

export default App;
