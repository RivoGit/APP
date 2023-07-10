import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
      <div className="navigation">
        <ul>
            <NavLink to="/" className={ ({isActive})=> (isActive) ? "activelink":""}>
            <li>Accueil</li> 
            </ NavLink>  
            <NavLink to="/ajoutcommentaire" className={ ({isActive})=> (isActive) ? "activelink":""}>
            <li>Ajouter commentaire</li> 
            </ NavLink> 
            <NavLink to="/listescommentaires" className={ ({isActive})=> (isActive) ? "activelink":""}>
            <li>Liste commentaire</li> 
            </ NavLink> 
        </ul>
        
      </div>
    );
  }
  
  export default Navigation;