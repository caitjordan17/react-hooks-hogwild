import React from "react";

function Piggy({name, img, specialty, weight, greased, medal, id}){
    return(
        <div className="pigTile" key={id}>
            <h3>{name}</h3>
            <img width={250} src={img} alt={name} />
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>{greased ? "Greased" : "Ungreased"}</p>
            <p>Highest Medal Achieved: {medal}</p>
        </div>
    )
}

export default Piggy;