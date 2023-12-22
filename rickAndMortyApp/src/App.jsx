import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import NavBar from "./components/NavBar"
import About from "./views/About"
import Favorites from "./views/Favorites"


function App() {
 

  return (
    <div className="h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images3.alphacoders.com/812/812062.png")'}}>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/favorites" element={<Favorites/>}  />
    </Routes>
    </div>
  )
}

export default App
