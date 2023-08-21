import React, {useState} from "react";
import Nav from "./Nav";
import PiggyPen from "./PiggyPen";
import hogs from "../porkers_data";
import PiggyFilter from "./PiggyFilter";
import PiggySort from "./PiggySort";

function App() {
    const [filteredGreased, setFilteredGreased] = useState("All");
	const [sort, setSort] = useState("Name")


    function handleGreasedFilter(event){
        setFilteredGreased(event)
    }
	const piggiesOnDisplay = hogs.filter((pig) => {
		if (filteredGreased === "Greased") {return pig.greased}
		if (filteredGreased === "Not Greased") {return !pig.greased}
		if (filteredGreased === "All") {return hogs}
	})

	const sortedPiggies = piggiesOnDisplay.sort((a, b) => {
		if (sort === "Name") {
			if(a.name < b.name){
				return -1;
			} if (b.name < a.name){
				return 1;
			}
			return 0;
		}
		if (sort === "Weight") {return a.weight - b.weight}
	})
	
	// const sortedPiggies = () => {
	// 	if (sort === "Name") {return piggiesOnDisplay.sort()}
	// 	if (sort === "Weight") {return piggiesOnDisplay.sort((a, b) => a.weight - b.weight)}
	// }
	console.log("sortedPiggies:", sortedPiggies)
	return (
		<div className="App">
			<Nav />
			<PiggyFilter filteredGreased={filteredGreased} handleGreasedFilter={handleGreasedFilter}/>
			<PiggySort onSelectedSort={setSort}/>
			<PiggyPen piggies={sortedPiggies} />
		</div>
	);
}

export default App;
