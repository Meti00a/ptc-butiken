import type Images from "./images.ts";

export default interface PokemonCard {
    id: string;
    name: string;
    images: Images;
    supertype: string;
    price: number;
    stock: number;
    flavorText?: string;
    rules?: string;
    rarity: string;
    artist: string;
}