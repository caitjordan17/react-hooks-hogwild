import React from "react";
import Piggy from "./Piggy";


function PiggyPen({piggies}){

    return(
        <div className="porkers">
            {piggies.map((piggy) => (
            <Piggy 
            id={piggy.name}
            name={piggy.name}
            img={piggy.image}
            specialty={piggy.specialty}
            weight={piggy.weight}
            greased={piggy.greased}
            medal={piggy["highest medal achieved"]}
            />))}
        </div>
    )
}

export default PiggyPen;