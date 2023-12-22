import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanCharacter } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Detail = () => {

    const { name, status, species, gender, origin, image, id } = useSelector((state) => state.characterDetail)
    const dispatch = useDispatch()
    useEffect(() => {
        return () => dispatch(cleanCharacter())
    }, [])

    const navigate = useNavigate()


    return <div>
        <button class="cursor-pointer duration-200 hover:scale-125 active:scale-100 bg-white rounded-full relative top-10 left-20" title="Go Back" onClick={() => navigate("/")}>
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-lime-500">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
  </svg>
</button>
    <div className="flex justify-center">

<div
  class="product-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 w-1/3 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
>
  <div
    class="absolute -left-[20%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150"
  >
    <div class="flex gap-1">
      <svg
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="1"
        fill="none"
        viewBox="0 0 24 24"
        class="fill-fuchsia-600 rotate-[24deg]"
        height="250"
        width="250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        ></polygon>
      </svg>
    </div>
  </div>
  <div
    class="absolute rounded-full bg-lime-500 z-20 left-1/2 top-[44%] h-[150%] w-[100%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"
  ></div>
  <div class="para uppercase text-center leading-none z-40">
    <p class="text-black font-semibold text-2xl font-serif">{name && name}</p>
    <p class="font-bold text-xl tracking-wider text-gray-500"> Specie: {species && species}</p>
  </div>
  <div class="img w-[300px] aspect-square bg-gray-100 z-40 rounded-md">
  <img src={image && image} alt={name && name} />
  </div>
  <div
    class="btm-_container z-40 flex flex-row justify-between items-end gap-10"
  >
    <div class="flex flex-col items-start gap-1">
      <div class="inline-flex gap-3 items-center justify-center">
        
        <p class="font-semibold text-xl text-white"> Status: {status && status}</p>
      </div>
      <div class="flex flex-row gap-2">
        <div class="inline-flex gap-3 items-center justify-center">
    
          <p class="font-semibold text-xl text-white">Origin: {origin?.name && origin?.name}</p>
        </div>
      </div>
      <div class="flex flex-row gap-2">
        <div class="inline-flex gap-3 items-center justify-center">
    
          <p class="font-semibold text-xl text-white">Gender: {gender && gender}</p>
        </div>
      </div>
    </div>
    
  </div>
</div>

        
    </div>
    </div>
}

export default Detail;