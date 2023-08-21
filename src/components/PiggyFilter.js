import React from "react";

function PiggyFilter({handleGreasedFilter}){
    const handleSelect = (e) => {
        handleGreasedFilter(e.target.value)
    }
    
    return(
        <div>
        <label for="greased-filter">Filter Greased Piggies: </label>
        <select onChange={handleSelect} id="greased-filter">
          <option value="All">All Piggies</option>
          <option value="Not Greased">Not greased</option>
          <option value="Greased">Greased</option>
        </select>
      </div>
    )
}

export default PiggyFilter;