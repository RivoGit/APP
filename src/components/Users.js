import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {

const [data,setData] =useState([]);


    useEffect(()=>{
       axios.get("https://restcountries.com/v3.1/all").then((resp)=>setData(resp.data));
    }, [])

    return (
      <div className="navigation">
        
        <tr>
            {
                
                
                    <td>{data.map((country) => country.translations.fra.common)}</td>
                
            }
        </tr>
     

      </div>
    );
  }
  
  export default Users;