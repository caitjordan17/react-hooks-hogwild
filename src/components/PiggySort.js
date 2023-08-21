import React from "react";

function PiggySort({onSelectedSort}){
    


    return(
        <div>
        <label for="piggy-sort">Sort Piggies By: </label>
        <button onClick={(e)=>onSelectedSort(e.target.textContent)}>Weight</button>
        <button onClick={(e)=>onSelectedSort(e.target.textContent)}>Name</button>
        {/* <select onChange={handleSelect} id="piggy-sort">
          <option value="All">All Piggies</option>
          <option value="Name">Name</option>
          <option value="Weight">Weight</option>
        </select> */}
        </div>
    )
}

export default PiggySort;