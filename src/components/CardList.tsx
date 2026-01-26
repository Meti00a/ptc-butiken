import type PokemonCard from "../interfaces/pokemonCard.ts";
import Card from "./Card.tsx";

export default function CardList({ cards, filterOn }: { cards: PokemonCard[]; filterOn: string }) {
    
    return <section className="cardlist">
        {cards
            .filter(card => card.supertype == filterOn || filterOn == "All")
            .map((card, index) => <Card key={index} card={card} />)}
    </section>
}
