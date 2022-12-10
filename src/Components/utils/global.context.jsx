/* eslint-disable default-case */
import { createContext, useContext, useState, useEffect,useReducer} from "react";
import axios from "axios";


export const initialState = {
  theme: "", 
  data: []
}


export const ContextGlobal = createContext(undefined);

const initialFavsState = []
const favsReducer = (state, action) => {
  switch(action.type){
    case 'Add fav':
      return[...state, action.payload]
  }
  
}

export const ContextProvider = ({ children }) => {
  
  const [data, setData] = useState()
  const [stateFavs, dispatchFavs] = useReducer(favsReducer, initialFavsState, initFav)
  function initFav(initialFavsState){
    return localStorage.getItem('Favs')
    ? JSON.parse(localStorage.getItem('Favs'))
    : initialFavsState
  }
  
  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
  },[])

  useEffect(() =>{
    localStorage.setItem('Favs', JSON.stringify(stateFavs))
  }, [stateFavs])

  return (
    <ContextGlobal.Provider value={{data, stateFavs,dispatchFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

 export const useContextGlobal = () =>{
  return useContext(ContextGlobal)

}
