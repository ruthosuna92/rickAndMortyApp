import { useDispatch, useSelector } from "react-redux";
import { deleteCharacter, isFavorite, isNotFavorite } from "../redux/actions";
import FavButton from "./FavButton";
import NotFavButton from "./NotFavButton";
import { useEffect, useState } from "react";

const Card = ({ name, status, species, gender, origin, image, id }) => {


    const dispatch = useDispatch()
    const [isFav, setIsFav] = useState(false)
    const allFavoritesCharacters = useSelector((state) => state.allFavoritesCharacters)

    useEffect(() => {
        if(allFavoritesCharacters.some((char) => char.id === Number(id))){
            setIsFav(true)
        }
    }, [allFavoritesCharacters])

    const handleFav = () => {
        setIsFav(!isFav)
        if(!isFav){
            dispatch(isFavorite(id))
            console.log("it's favorite")
        } else {
            dispatch(isNotFavorite(id))
            console.log("It isn't favorite")
        }
    }

    return <div>
        <div className="drop-shadow-md relative group duration-500 group overflow-hidden relative text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 duration-700">
            <div className="w-56 h-72 bg-fuchsia-500 text-gray-800">
                <div className="flex flex-row justify-between">
                    <img src={image} alt={name} />
                    <div className="absolute top-3 left-1" onClick={handleFav}>
                       { isFav ? <FavButton/> : <NotFavButton/>}
                    </div>
                  {!isFav ?  <div className="absolute top-1 right-1  text-red-300 hover:text-red-500" onClick={() => dispatch(deleteCharacter(id))}>
                        <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-12 h-12 fill-current">
                            <path fillRule="evenodd" d="M50,87.4A37.4,37.4,0,1,0,12.6,50,37.3,37.3,0,0,0,50,87.4ZM44,37.3A4.7,4.7,0,0,0,37.3,44l6.1,6-6.1,6A4.7,4.7,0,0,0,44,62.7l6-6.1,6,6.1A4.7,4.7,0,0,0,62.7,56l-6.1-6,6.1-6A4.7,4.7,0,0,0,56,37.3l-6,6.1Z">
                            </path>
                        </svg>
                    </div> : null}
                </div>
            </div>
            <div className="absolute bg-gray-50 -bottom-14 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-lime-400 font-bold text-xl cursor-pointer hover:text-lime-600" onClick={(event) => console.log(event.target.id)} id={id}>{name}</span>
                <span className="text-gray-800 font-bold text-xs">{gender}</span>
                <p className="text-neutral-800">{species}</p>
            </div>


        </div>
    </div>
}

export default Card;