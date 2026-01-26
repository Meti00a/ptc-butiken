import { Link, useLoaderData } from "react-router-dom"
import { useStateContext } from "../utils/useStateObject.ts";
import type PokemonCard from "../interfaces/pokemonCard.ts";


export default function Home() {
  // Hämtar data genom att använda routen's loader - Kolla i src/routes.tsx.
  const pokemonCards = useLoaderData().pokemonCards as PokemonCard[];
  const [{ filterOn }, setState] = useStateContext();

  return <>
    <h1>Pokémon Butiken</h1>
    <select onChange={(element) => setState("filterOn", element.target.value)}>
      <option value="All" selected={filterOn == "All" ? true : false}>All</option>
      <option value="Pokémon" selected={filterOn == "Pokémon" ? true : false}>Pokemon</option>
      <option value="Trainer" selected={filterOn == "Trainer" ? true : false}>Trainer</option>
    </select>
    {pokemonCards.filter(card => card.supertype == filterOn || filterOn == "All")
      .map((card, index) => <Link to={"/card/" + card.id} key={index}>
        <p>{card.name}</p>
        <img src={card.images.small} alt="No image" />
      </Link>)}
  </>
}