// Page-komponenter
import Home from "./pages/Home.tsx";
import Card from "./pages/Card.tsx";

//Loaders
import pokemonCardsLoader from "./utils/pokemonCardsLoader.ts";
import pokemonCardByIdLoader from "./utils/pokemonCardByIdLoader.ts";

const routes = [
    {
        path: "/",
        element: <Home />,
        loader: pokemonCardsLoader
    },
    {
        path: "/card/:cardId",
        element: <Card />,
        loader: pokemonCardByIdLoader
    },
    {
        path: "*",
        element: <h1>Sorry! This page does not exist!</h1>
    },
]


export default routes 