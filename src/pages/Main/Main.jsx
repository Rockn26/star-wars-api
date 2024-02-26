import React, { useEffect } from "react";
import { useState } from "react";
import { filterStarships, getStarships } from "../../API/Starship.js";
import StarshipCard from "../../components/StarshipCard/StarshipCard.jsx";
import "./Main.style.css";

const Main = ({setSelectedStarship}) => {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    
    getStarships(page).then((data) => {
      setStarships(data.results);
    });
  }, [page])

 

  const handleFilter = () => {
    const query = document.querySelector("#filter-input").value;
    filterStarships(query).then((data) => setStarships(data.results));
  };

  

  return (
    <div className="main-area">
      <h1 className="title">Star Wars</h1>
      <div>
        <span>Name / Model </span>
        <input
          id="filter-input"
          className="input-text"
          type="text"
          placeholder=" Name / Model"
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div className="starships">
        {starships.map((starship) => {
          return <StarshipCard key={starship.name} starship={starship} setSelectedStarship={setSelectedStarship} />;
        })}
      </div>
      <div>
        <button onClick={()=> setPage(prev=>{
          if(prev === 1) {
            return 4
          } 
          return prev - 1 
          
        } )}>Previous page</button>
        <button onClick={()=> setPage(prev=> {
          if(prev === 4) {
            return 1 
          }
           return prev + 1
         
        } )}>Next page</button>
      </div>
    </div>
  );
};

export default Main;
