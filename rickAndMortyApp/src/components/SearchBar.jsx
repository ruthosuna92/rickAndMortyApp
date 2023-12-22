import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter, setAlert, getRandomCharacter } from "../redux/actions";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {


    const dispatch = useDispatch()

    const [id, setId] = useState(null)
    
    const allCharacters = useSelector((state) => state.allCharacters)
    
    const navigate = useNavigate();

    const handleButton = async (event) => {
        navigate("/")
        if (allCharacters.some((char) => char.id === Number(id))) {
            const object = {
                isOpen: true,
                message: "This character already exists."
            }
            dispatch(setAlert(object))
        }
        else if (id > 826) {
            const object = {
                isOpen: true,
                message: "You only have 826 characters."
            }
            dispatch(setAlert(object))

        } else {
            const response = await dispatch(getCharacter(id))
        }
    }

    const handleRandom = () => {
        navigate("/")
        if (allCharacters.some((char) => char.id === Number(id))) {
            const object = {
                isOpen: true,
                message: "This character already exists."
            }
            dispatch(setAlert(object))
        } else {
            dispatch(getRandomCharacter())
        }
    }

    return <div className="flex flex-row gap-2">
        <input className="text-slate-950 rounded-lg h-8" type="number" placeholder="Enter a number..." value={id} onChange={(event) => setId(event.target.value)} />

        <button className="bg-lime-500 w-20 rounded-full hover:bg-lime-700 size-min p-1 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" type="search" onClick={handleButton} value={id}>Search</button>

        <button id="random" className="bg-lime-500 w-20 rounded-full hover:bg-lime-700 size-min p-1 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" type="search" onClick={handleRandom} value={id}>Random</button>
    </div>

    //"cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg


}

export default SearchBar;