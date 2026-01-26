import { Outlet } from "react-router-dom";
import { useStateObject } from "./utils/useStateObject.ts";


export default function App() {
  const stateAndSetter = useStateObject({
    filterOn: 'All',
  });

  return <>
    <h1>Welcome to Linus PCT-Store</h1>
    <Outlet context={stateAndSetter} />
  </>
}