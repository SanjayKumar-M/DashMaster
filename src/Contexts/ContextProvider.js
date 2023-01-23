import {React,useState,useContext,createContext} from "react";
const StateContext = createContext();
const initialState = {
    chart: false,
    cart: false,
    userProfile: false,
    notification: false


}

const ContextProvider = ({children}) => {
  return (
    <StateContext.Provider value={{test: 'test'}}>
        {children}

    </StateContext.Provider>
  )
}

export default ContextProvider