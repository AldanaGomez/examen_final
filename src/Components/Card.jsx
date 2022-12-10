import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {
  
  const addFav = ()=>{ 
  }

  return (
    <div className="card">
        
        <Link key= {id} to={`/dentist/${id}`}>
          <img src="./images/doctor.jpg" alt="Doctor" />
          <h3>{name}</h3>
          <h4>{username}</h4>
          <h5>{id}</h5>
        </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
