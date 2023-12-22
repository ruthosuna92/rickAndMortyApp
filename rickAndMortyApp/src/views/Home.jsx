
import Alert from "../components/Alert";
import Cards from "../components/Cards";



const Home = () => {
    
    return  <div className="h-screen overflow-hidden relative">
    {/* Contenido de la aplicación con scroll */}
    <div className="relative z-10 h-full overflow-y-scroll bg-transparent p-4">
      {/* Agrega tu contenido, por ejemplo, el componente Cards */}
      
      <Cards />
    </div>
  </div>
}

export default Home;