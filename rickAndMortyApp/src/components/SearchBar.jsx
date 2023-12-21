import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch()

    const [id, setId] = useState(null)
    const allCharacters = useSelector((state) => state.allCharacters)
    console.log(allCharacters)

    const handleButton = async (event) => {

        console.log(typeof id)
        const response = await dispatch(getCharacter(id))
        console.log(allCharacters)
        console.log(response)
    }
    return <div className="grid gap-3 grid-cols-2 ">
    <input className="text-slate-950 rounded-lg" type="number" placeholder="Enter a number..." value={id} onChange={(event) => setId(event.target.value)}/>
    <button className="bg-lime-500 rounded-full hover:bg-lime-700 size-min p-1" type="search" onClick={handleButton} value={id}>Search</button>
    </div>
}

export default SearchBar;