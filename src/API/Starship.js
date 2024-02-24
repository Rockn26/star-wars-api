import axios from "axios";

export const getStarships = async () => {
    const { data } = await axios.get("https://swapi.dev/api/starships/") 
    return data
}

export const filterStarships = async (query) => {
    const { data } = await axios.get(`https://swapi.dev/api/starships/?search=${query}`) 
    return data
}





