import { useEffect, useState } from "react"
import type PokemonCard from "../interfaces/pokemonCard.ts"
import { Link } from "react-router-dom"


export default function Home() {
  const [pokemonCards, setPokemonCards] = useState<PokemonCard[]>([])
  const [filterOn, setFilterOn] = useState("All") 

  async function getPokemonCardsData(){
    const response = await fetch("/pokemonCards.json")
    const result = await response.json()
    
    setPokemonCards(result)
  }

  useEffect(() => {
    getPokemonCardsData()
  }, [])

  return <>
  <h1>Pokémon Butiken</h1>
  <select onChange={(element) => setFilterOn(element.target.value)}>
    <option value="All">All</option>
    <option value="Pokémon">Pokemon</option>
    <option value="Trainer">Trainer</option>
  </select>
    {pokemonCards.filter( card => card.supertype == filterOn || filterOn == "All")
    .map( (card, index) => <Link to={"/card/" + card.id} key={index}>
      <p>{card.name}</p>
      <img src={card.images.small} alt="No image" />
    </Link>)}
  </>
}