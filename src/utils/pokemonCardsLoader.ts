export default async function pokemonCardsLoader() {
  return {
    pokemonCards:
      await (await fetch('/pokemonCards.json')).json()
  };
};