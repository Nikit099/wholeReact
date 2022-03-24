import React, { useContext } from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/context';

import { privatRoutes, publickRoutes } from '../router';


const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth ? 
         <Routes>

            {privatRoutes.map(i =>  
               (<Route path = {i.path}  key = {i.path} element = {i.elem}/>)
            )} 
            
            <Route path="/" element={<Navigate  to="/Posts" /> }/>
            <Route path="/Login" element={<Navigate  to="/Posts" /> }/>

        </Routes> 
        : 
        <Routes>
            
            {publickRoutes.map(i =>  
                (<Route path={i.path} key = {i.path} element = {i.elem}/>)
             )}
            <Route path="/" element={<Navigate  to="/Login" /> }/>
            <Route path="/Posts" element={<Navigate  to="/Login" /> }/>
            <Route path="/About" element={<Navigate  to="/Login" /> }/>
            <Route path="/Posts/:id" element={<Navigate  to="/Login" /> }/>


        </Routes>
       
    );
};

export default AppRouter;