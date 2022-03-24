import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './Navbar/Navbar';
import AppRouter from './Components/AppRouter';
import { AuthContext } from './context/context';
const App = () => {
    
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

    return (
        
        < AuthContext.Provider value = {{
            isAuth,
            setIsAuth
        }} > 

        <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        </BrowserRouter> 
        </AuthContext.Provider>
       
    
      
    )
};

export default App;