import React, { useEffect } from "react";
import { useState } from "react";
import { filterStarships, getStarships } from "../../API/Starship.js";
import StarshipCard from "../../components/StarshipCard/StarshipCard.jsx";
import "./Main.style.css";

const Main = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getStarships().then((data) => {
      setStarships(data.results);
      console.log(data.results);
    });
  }, []);

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
          return <StarshipCard key={starship.name} starship={starship} />;
        })}
      </div>
    </div>
  );
};

export default Main;
