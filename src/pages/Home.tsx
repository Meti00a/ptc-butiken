import { useLoaderData } from "react-router-dom"
import { useStateContext } from "../utils/useStateObject.ts";
import type PokemonCard from "../interfaces/pokemonCard.ts";
import CardList from "../components/CardList.tsx";


export default function Home() {
  // Hämtar data genom att använda routen's loader - Kolla i src/routes.tsx.
  const pokemonCards = useLoaderData().pokemonCards as PokemonCard[];
  const [{ filterOn }, setState] = useStateContext();

  return <>
    <label>Type: &nbsp;
      <select onChange={(element) => setState("filterOn", element.target.value)}>
        <option value="All" selected={filterOn == "All" ? true : false}>All</option>
        <option value="Pokémon" selected={filterOn == "Pokémon" ? true : false}>Pokemon</option>
        <option value="Trainer" selected={filterOn == "Trainer" ? true : false}>Trainer</option>
      </select>
    </label>
    <CardList cards={pokemonCards} filterOn={filterOn} />
  </>
}