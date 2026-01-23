import { useEffect, useState } from "react"
import type PokemonCard from "../interfaces/pokemonCard.ts"


export default function Home() {
  const [pokemonCards, setPokemonCards] = useState<PokemonCard[]>([])

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

    {pokemonCards.map( (card, index) => <section key={index}>
      <p>{card.name}</p>
      <img src={card.images.small} alt="No image" />
    </section>)}
  </>
}