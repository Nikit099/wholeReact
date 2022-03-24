import React, { useContext } from 'react';
import { AuthContext } from '../context/context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            
            <h1>Авторизация</h1>
            <form onSubmit={login}>
            <input type="text" placeholder='логин' />
            <input type="text" placeholder='пароль' />
            <button>Yes</button>
            </form>
            
        </div>
    );
};

export default Login;