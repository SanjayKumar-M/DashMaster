import { React, useState, useContext, createContext } from "react";
const StateContext = createContext();
const initialState = {
  chart: false,
  cart: false,
  userProfile: false,
  notification: false


}

const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState);
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  return (
    <StateContext.Provider value={{ activeMenu ,setActiveMenu,handleClick, isClicked}}>

      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () =>useContext(StateContext)

export default ContextProvider