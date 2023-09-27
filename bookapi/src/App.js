import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { createContext, useState } from 'react';
import Search from './components/Search';
import BookItem from './components/BookItem';


export const NaverData = createContext() 

function App() {
  const [searchData, setSearchData] = useState([])

  return (
    <div>
      <NaverData.Provider value={{searchData, setSearchData}}>
        <Search/>
        <Routes>
          <Route path='/book' element={<BookItem/>}/>
        </Routes>
      </NaverData.Provider>
    </div>
  );
}

export default App;
