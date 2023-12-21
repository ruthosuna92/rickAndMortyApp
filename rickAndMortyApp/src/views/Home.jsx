import { useSelector } from "react-redux";



const Home = () => {
    
    const allCharacters = useSelector((state) => state.allCharacters)
    console.log(allCharacters)
    return <div className="grid grid-rows-3 grid-flow-col gap-4">
        {allCharacters?.map((char) => {
            return <div key={char?.id}>
                <p>Name: {char?.name}</p>
                <p>Status: {char?.status}</p>
                <p>Specie: {char?.species}</p>
                <p>Gender: {char?.gender}</p>
                <p>Origin: {char?.origin?.name}</p>
                <img src={char?.image} alt={char?.name}/>
            </div>
        })}
    </div>
}

export default Home;