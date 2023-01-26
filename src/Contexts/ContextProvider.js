import { React, useState, useContext, createContext } from "react";
const StateContext = createContext();
const initialState = {
  chart: false,
  cart: false,
  userProfile: false,
  notification: false


}

const ContextProvider = ({ children }) => {
  const [activeMenu, setactiveMenu] = useState(true)
  return (
    <StateContext.Provider value={{ activeMenu }}>

      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () =>useContext(StateContext)

export default ContextProvider