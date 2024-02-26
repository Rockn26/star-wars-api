import React from 'react'
import './StarshipCard.style.css'
import { Link } from 'react-router-dom'

const StarshipCard = ({starship, setSelectedStarship}) => {
  return (
    <div className='starship-details'>
      <h2>
       {starship.name}
      </h2>
      <h4>
        Model: {starship.model}
      </h4>
      <h4>
        Hyperdrive Rating: {starship.hyperdrive_rating}
      </h4>
      <Link onClick={()=> setSelectedStarship(starship)} to={`/${starship.name}`} >
        More Details
      </Link>

    </div>
  )
}

export default StarshipCard
