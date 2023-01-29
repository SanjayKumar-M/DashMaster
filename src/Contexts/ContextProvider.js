import { React, useState, useContext, createContext } from "react";
const StateContext = createContext();
const initialState = {
  chart: false,
  cart: false,
  userProfile: false,
  notification: false


}

const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  return (
    <StateContext.Provider value={{ activeMenu ,setActiveMenu,screenSize, setScreenSize,handleClick, isClicked}}>

      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () =>useContext(StateContext)

export default ContextProvider