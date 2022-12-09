import { createContext, useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);



export const ContextProvider = ({ children }) => {
  
  const [data, setData] = useState()
  // const[state,dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
  },[])

  // const reducer = (state, action) =>{
  //   switch(action.type){
  //     case 'Change theme':
  //       return{}
  //     default:
  //       throw new Error
  //   }
  // }
  
  return (
    <ContextGlobal.Provider value={{data}}>
      {children}
    </ContextGlobal.Provider>
  );
};

 export const useContextGlobal = () =>{
  return useContext(ContextGlobal)

}
