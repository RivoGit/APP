import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { useState } from "react";

const AjoutCommentaire = (props) => {
  const {ajoutCommentaire} = props;
  const [comment,setComment] = useState({
    nom:"",
    commentaire : ""
  })
 
  

function handleSubmit (e){
  e.preventDefault();
  ajoutCommentaire(comment);
  setComment({
    nom:"",
    commentaire : ""
  });

}

function handleChange(e){
  const { name, value} = e.target;
  setComment({...comment, [name]:value });
}

    return (
      <div>
        <Logo/>
        <Navigation/>
        <h1>Ajouter commentaire</h1>
        <form className="ajoutcommentaire" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="nom" >Nom:</label><br/>
          <input type="text" id="nom" name="nom" value={comment.nom}   onChange={(e)=>handleChange(e)}  required/><br/>
          <label htmlFor="commentaire">Commentaire:</label><br/>
          <textarea name="commentaire" id="commentaire" cols="30" rows="10" value={comment.commentaire}   onChange={(e)=>handleChange(e)}/><br/>
          <input type="submit" value="Envoyer commentaire"  className="btn" />

        
        </form>
      </div>
    );
  }
  
  export default AjoutCommentaire;