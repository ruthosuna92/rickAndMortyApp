import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./redux/actions"
import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import NavBar from "./components/NavBar"
import About from "./views/About"


function App() {
  const dispatch = useDispatch()
  const countReducer = useSelector((state) => state.count)
 

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
