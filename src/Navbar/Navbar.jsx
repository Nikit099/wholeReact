import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/context';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <nav  style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            color: 'white',
            margin: '0 0 20px 0'
          }}>   
         <Link to="/Posts" className='Link'>Посты</Link>
          <Link to="/About" className='Link'>Про меня</Link>
          <button onClick={logout}>Выйти</button>
          </nav>
    );
};

export default Navbar;