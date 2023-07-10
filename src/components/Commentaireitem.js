import React, { useState } from "react";

const Commentaireitem = (props) => {
    const {commentaire,handleDelete} = props;
    const [n,setN] = useState(0);
    const [commentaireEdit, setCommentaireEdit] = useState({
        commentaireEdit : commentaire.commentaire});
    
function edit(){
    const commentEdit = prompt("Enter la nouvelle valeur");
    
    setCommentaireEdit({commentaireEdit:commentEdit});
    
}

    return (
      
        <div key={commentaire.commentaireid} className = "card">
            <h2 >{commentaire.nom} </h2>
            
            <p> { commentaireEdit.commentaireEdit} <span onClick={()=>edit()}><img src="logo/edit-246-16.png" alt="Edit"/></span></p> <span onClick={() => setN(n + 1)}>♥</span><span >{n}</span>
            <div className="footer">
                <button className="btn-delete" onClick={()=>handleDelete(commentaire.commentaireid)}>Supprimer</button>


            </div>

        </div>
    );
  }
  
  export default Commentaireitem;