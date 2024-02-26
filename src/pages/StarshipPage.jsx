import React from 'react'
import { Link } from 'react-router-dom'


const StarshipPage = ({starship}) => {
  return (
    <div>
      <h1>{starship.name}</h1>
      <h4>Model: {starship.model}</h4>
      <h4>Hyperdrive Rating : {starship.hyperdrive_rating}</h4>
      <h4>Passengers: {starship.passengers}</h4>
      <h4>Max Atmosphering Speed: {starship.max_atmosphering_speed}</h4>
      <h4>Crew: {starship.crew}</h4>
      <h4>Cargo Capacity: {starship.cargo_capacity}</h4>

      <Link to={"/"} >
        return to Main Page
      </Link>
      
    
  
    </div>
  )
}

export default StarshipPage
