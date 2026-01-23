import type Images from "./images.ts";

export default interface PokemonCard {
    id: string;
    name: string;
    images: Images;
}