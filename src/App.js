import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { Navbar, Footer, Sidebar, ThemeSettings } from './Components'
import { Ecommerce, Orders, Calender,Line, Employees, Stacked, Pyramid, Customer, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './Pages'
import { useStateContext } from './Contexts/ContextProvider';


const App = () => {
  const {activeMenu} = useStateContext();
  
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='settings' position='top' >
              <button type='button' className='text-3xl p-3 hover: drop-shadow-x1 hover: bg-light-gray text-white' style={{ background: 'black', borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>Navbar</div>
          </div>
          <div>
            <Routes>
              <Route path='/' element={<Ecommerce/>} />
              <Route path='/ecommerce' element={<Ecommerce/>} />
              <Route path='/orders' element={<Orders/>} />
              <Route path='/employees' element={<Employees/>} />
              <Route path='/customer' element={<Customer/>} />
              <Route path='/kanban' element={<Kanban/>} />
              <Route path='/editor' element={<Editor/>} />
              <Route path='/calender' element={<Calender/>} />
              <Route path='/color-picker' element={<ColorPicker/>} />
              <Route path='/area' element={<Area/>} />
              <Route path='/pie' element={<Pie/>} />
              <Route path='/line' element={<Line/>} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/financial' element={<Financial/>} />
              <Route path='/pyramid' element={<Pyramid/>} />
              <Route path='/color-mapping' element={<ColorMapping/>} />
              <Route path='/stacked' element={<Stacked/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
