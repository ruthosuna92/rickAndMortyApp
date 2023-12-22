import Alert from "./Alert"
import Card from "./Card"
import { useSelector } from "react-redux"


const Cards = () => {

   const allCharacters = useSelector((state) => state.allCharacters)
   const alert = useSelector((state) => state.alert) 


    return <div className="flex flex-wrap gap-5 m-5 justify-center m-2" >
        
        {allCharacters?.map(({name, id, status, species, origin, image, gender}) => {

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
        {alert.isOpen && <Alert/>}
    </div>
}

export default Cards;