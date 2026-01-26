import { Link, useLoaderData } from "react-router-dom"
import type PokemonCard from "../interfaces/pokemonCard"
import type SimpleCard from "../interfaces/simpleCard";

export default function Card() {
  // Hämtar data genom att använda routen's loader - Kolla i src/routes.tsx.
  const { card, before, next }: { card: PokemonCard, before: SimpleCard, next: SimpleCard } = useLoaderData();

  return <section className="detailedCard">
    <section className="meny">
      <Link to={"/card/" + before.id}>{before.name}</Link>
      <p><u>{card.supertype}</u></p>
      <Link to={"/card/" + next.id}>{next.name}</Link>
    </section>
    <section className="card">
      <p>{card?.name}</p>
      <div>
        <img src={card?.images.large} alt="No image" />
        <div className="cardInfo">
          <p>Price: {card.price}</p>
          <p>Stock: {card.stock}</p>
          <p>Rarity: {card.rarity}</p>
          <p>Description: {card.flavorText} {card.rules}</p>
          <p>Artist: {card.artist}</p>
        </div>
      </div>
    </section>
  </section>
}