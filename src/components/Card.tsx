import { Link } from "react-router-dom";
import type PokemonCard from "../interfaces/pokemonCard";

export default function Card({ card }: { card: PokemonCard }) {
    return <Link className="card" to={"/card/" + card.id}>
        <p>{card.name}</p>
        <img src={card.images.small} alt="No image" />
    </Link>
}
