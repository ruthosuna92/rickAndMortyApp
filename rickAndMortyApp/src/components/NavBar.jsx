import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {

    return <div>
    <div className="flex flex-row justify-evenly bg-fuchsia-950 text-zinc-50 p-4 h-16">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <SearchBar/>

    </div>

    
    </div>
}

export default NavBar;