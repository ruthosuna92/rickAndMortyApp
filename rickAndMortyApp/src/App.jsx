import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import NavBar from "./components/NavBar"
import About from "./views/About"
import Favorites from "./views/Favorites"
import Detail from "./views/Detail"



function App() {


  return (
    <div className="min-h-screen scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 sticky bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images3.alphacoders.com/812/812062.png")'}}>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/favorites" element={<Favorites/>}  />
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
    </div>
  )
}

export default App
