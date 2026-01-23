import Card from "./pages/Card";
import Home from "./pages/Home";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/card/:cardId",
        element: <Card />
    },
    {
        path: "*",
        element: <h1>Sorry! This page does not exist!</h1>
    },
]


export default routes 