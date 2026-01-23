import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type PokemonCard from "../interfaces/pokemonCard"

export default function Card(){
    const { cardId } = useParams()
    const [pokemonCards, setPokemonCards] = useState<PokemonCard[]>([])
    const [card, setCard] = useState<PokemonCard>()

      async function getPokemonCardsData(){
        const response = await fetch("/pokemonCards.json")
        const result = await response.json()
        
        setPokemonCards(result)
      }
    
      useEffect(() => {
        getPokemonCardsData()
      }, [])

      useEffect(() => {
        setCard(pokemonCards.find(card => card.id == cardId))
      }, [pokemonCards])

    return <>
        <h1>Pokémon card - {card?.name}</h1>
        <img src={card?.images.large} alt="No image" />
    </>
}