import React, { useState } from "react";


const Recherche = (props) => {

    const {resultRecherche} = props;

    const [textRecherche, setTextRecherche] = useState({
        recherche : ""
    });

    function handleChange(e) {
        const {name,value} = e.target;
        setTextRecherche({...textRecherche,[name]:value});
        resultRecherche(textRecherche);
    }

    function handleInput(e) {
       // e.perventDefault();
        resultRecherche(textRecherche);
    
    }

    return (
    <div className="recherche">
        <input type="text" placeholder="Tapez ici votre recherche" name="recherche" value={textRecherche.recherche} onChange = {(e)=>handleChange(e)}     />
        <span  className="rechercheSpan" onClick = { (e) => handleInput(e)} >Rechercher →</span>
    </div>
    );
  }
  
  export default Recherche;