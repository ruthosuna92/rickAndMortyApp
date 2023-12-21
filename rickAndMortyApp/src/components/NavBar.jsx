import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
const NavBar = () => {

    return <div className="flex flex-row justify-evenly bg-fuchsia-950 text-zinc-50 p-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <SearchBar/>
    </div>
}

export default NavBar;