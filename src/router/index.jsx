import PostIDpage from "../pages/PostIDpage";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Login from "../pages/Login";


export const privatRoutes = [
    { path: '/About', elem: <About/> },
    { path: '/Posts', elem: <Posts/> },
    { path: '/Posts/:id', elem: <PostIDpage/> },
]
export const publickRoutes = [
    { path: '/Login', elem: <Login/> }
    
]