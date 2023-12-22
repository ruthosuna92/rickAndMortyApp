import { useSelector } from "react-redux"
import Card from "../components/Card"


const Favorites = () => {

    const allFavoritesCharacters = useSelector((state) => state.allFavoritesCharacters)
    console.log(allFavoritesCharacters)

    return <div className="flex flex-wrap gap-5 m-5 justify-center" >
        {allFavoritesCharacters?.map(({name, status, species, gender, origin, image, id}) => {
            return <Card
            name={name}
            status={status}
            species={species}
            origin={origin.name}
            image={image}
            id={id}
            gender={gender}
            />
        })}
    </div>
}

export default Favorites;