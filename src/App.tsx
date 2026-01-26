import { Link, Outlet } from "react-router-dom";
import { useStateObject } from "./utils/useStateObject.ts";


export default function App() {
  const stateAndSetter = useStateObject({
    filterOn: 'All',
  });

  return <>
    <header>
      <Link>Linus PCT-Store</Link>
    </header>
    <Outlet context={stateAndSetter} />
  </>
}