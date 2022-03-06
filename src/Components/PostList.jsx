import React, { useState } from 'react';
import Post from './Post';
const PostList = ({post, removePost, setPost}) => {

    // const [firstElem, setfirstElem] = useState(null)
    // const [twoElem, setTwoElem] = useState(null)

    // const dragStart = (e) => {
    //     setfirstElem(e.target)
    //     setTimeout(()=> {
    //         e.target.style.opacity = '0'
    //     }, 0)
        
    // }   
    // const drop = (e) => {
    //     e.preventDefault()
    //     e.target.style.background = 'rgb(36, 36, 36)'
    //     // setTwoElem(e.target)
    //     firstElem.TextContent = 'sda'
    //     e.target.parentElement.innerHTML = ''
    //     e.target.parentElement.innerHTML = firstElem
    //     console.log(e);
       
    // }

    // const dragEnd = (e) => {
    //     e.target.style.opacity = '1'

    //     // e.target.parentElement.append(twoElem)
    //     // console.log(e.target.parentElement);

    //     // e.target.remove()

        
    // }

    // const dragOver = (e) => {
    //     e.preventDefault()
    //     e.target.style.background = 'rgb(5, 5, 5)'

    // }

    // const dragLeave = (e) => {
    //     e.target.style.background = 'rgb(36, 36, 36)'
        
    // }

 

    return (
        <div >
            {post.map(i => (
                <Post setPost = {setPost} 
                post = {post}
                i = {i} 
                title = {i.main}
                body = {i.dop}
                id = {i.id}
                key ={i.id}  
                removePost = {removePost}
                // drop = {drop}
                // dragOver = {dragOver}
                // dragLeave = {dragLeave}
                // dragStart={dragStart}
                // dragEnd = {dragEnd}
                />
            ))}
        </div>
    );
};

export default PostList;