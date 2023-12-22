import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../redux/actions";



const Alert = () => {

    const dispatch = useDispatch()
    const message = useSelector((state) => state.alert.message)
    const handleAlert = () => {
        const object = {
            isOpen: false,
            message:""
        }
        dispatch(setAlert(object))
    }
    
    return <div class="absolute top-40 left-30 w-3/12 h-1/3 bg-gray-50 rounded-2xl p-4 shadow shadow-sky-800 flex flex-col justify-evenly items-center">
    
    <h1 className="font-bold text-6xl text-center">Alert</h1>
    <h1 className="text-base text-gray-600 text-4xl text-center">{message}</h1>
    
    <div className="absolute top-3 right-2  text-red-300 hover:text-red-500" onClick={handleAlert}>
      <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-12 h-12 fill-current">
      <path fillRule="evenodd" d="M50,87.4A37.4,37.4,0,1,0,12.6,50,37.3,37.3,0,0,0,50,87.4ZM44,37.3A4.7,4.7,0,0,0,37.3,44l6.1,6-6.1,6A4.7,4.7,0,0,0,44,62.7l6-6.1,6,6.1A4.7,4.7,0,0,0,62.7,56l-6.1-6,6.1-6A4.7,4.7,0,0,0,56,37.3l-6,6.1Z">
      </path>
      </svg>
  
    </div>
    <img src="../../public/warning-icon-png-2749.png" className="w-16 " />
    
  </div>
}

export default Alert;