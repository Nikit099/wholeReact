import React from 'react';
import { useState } from 'react';
import './App.css';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';
import PostList from './Components/PostList';


function App() {

    const [value, setValue] = useState({title: '', body: ''})
    const [post, setPost] = useState([{
        main: 'qqqqq',
        dop: 'uy768',
        id: 560534
    },{
        main: 'df',
        dop: 'sda',
        id: 1010101
    }])

    

    const Drow = (e) => {
        e.preventDefault()
        const newPost = {
            main: value.title,
            dop: value.body,
            id: new Date().getMilliseconds()
        }
        setPost([...post, newPost])
        setValue ({title: '', body: ''})
    }

    const removePost = (id) => {
        setPost(post.filter(i => i.id !== id))
    }

    return ( 
        <div className = "App">
          

            
            <form onSubmit={ value.title !== '' && value.body !== '' ? Drow : (e) => e.preventDefault() } > 
            <Input value = {value.title} setValue = {e => setValue({...value, title: e.target.value})} />
            <Input value = {value.body} setValue = {e => setValue({...value, body: e.target.value})} />
            <Button/>
          <PostList post = {post} removePost = {removePost} setPost = {setPost}/>
            </form>
          
        </div>
    );
}

export default App;