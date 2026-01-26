// Låter oss komma åt params i routen 
import type { LoaderFunctionArgs } from "react-router-dom";
import type PokemonCard from "../interfaces/pokemonCard.ts";

export default async function pokemonCardByIdLoader({ params }: LoaderFunctionArgs) {
    const cards: PokemonCard[] = await (await fetch("/pokemonCards.json")).json();

    if (params.cardId) {
        return cards.find((card) => card.id == params.cardId);
    }

    return -1
};