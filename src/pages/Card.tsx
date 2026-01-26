import { useLoaderData } from "react-router-dom"
import type PokemonCard from "../interfaces/pokemonCard"

export default function Card() {
  // Hämtar data genom att använda routen's loader - Kolla i src/routes.tsx.
  const card = useLoaderData() as PokemonCard;

  return <>
    <h1>Pokémon card - {card?.name}</h1>
    <img src={card?.images.large} alt="No image" />
  </>
}