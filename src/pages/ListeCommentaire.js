import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Commentaireitem from "../components/Commentaireitem";
import Recherche from "../components/Recherche";



const ListeCommentaire = (props) => {
    const {commentaires,handleDelete, resultRecherche} = props;
    
    return (
      <div >
        <Logo />
        <Navigation/>
        <h1>Liste commentaire</h1>
        <Recherche  resultRecherche = {resultRecherche} />
        <div className="listeCommentaire">
            {
                commentaires.map((commentaire,index) =>(
                    <Commentaireitem commentaire= {commentaire} key = {commentaire.commentaireid} handleDelete = {handleDelete} index= {index} />
                ))
            }
        </div>
      </div>
    );
  }
  
  export default ListeCommentaire;