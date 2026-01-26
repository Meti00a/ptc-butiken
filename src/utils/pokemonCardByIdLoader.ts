// Låter oss komma åt params i routen 
import type { LoaderFunctionArgs } from "react-router-dom";
import type PokemonCard from "../interfaces/pokemonCard.ts";

export default async function pokemonCardByIdLoader({ params }: LoaderFunctionArgs) {
    const cards: PokemonCard[] = await (await fetch("/pokemonCards.json")).json();
    if (params.cardId) {
        const index = cards.findIndex((card) => card.id == params.cardId)
        const beforeIndex = (index - 1) < 0 ? (cards.length - 1) : (index - 1);
        const nextIndex = (index + 1) >= cards.length ? 0 : (index + 1);

        return {
            card: cards[index],
            before: {
                id: cards[beforeIndex].id,
                name: cards[beforeIndex].name,
                supertype: cards[beforeIndex].supertype
            },
            next: {
                id: cards[nextIndex].id,
                name: cards[nextIndex].name,
                supertype: cards[nextIndex].supertype
            }
        };
    }

    return -1
};