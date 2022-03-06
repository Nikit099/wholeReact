import React, { useEffect, useState } from 'react';

const Post = ({title, body, id, removePost, i, post, setPost, dragOver, drop, dragLeave, dragStart, dragEnd}) => {
    let text = ''
    let flag = false

   const redact = () => {
   
    if(flag){
        flag = false
    }else{
        flag = true
    }
    
    console.log(flag);

    return 
   }
//    useEffect(() => {
//   text = flag ? <h1 >{title}</h1> : <input style={{border: 'none', background: 'none', color: 'white', cursor: 'pointer'}} value = {title}   type={'textarea'} />

    
// }, [])
   
    return (
        
        <div className='cell'  onDrop = {e => drop(e)}  onDragOver = {e => dragOver(e)} onDragLeave = {e => dragLeave(e)}   >
            <div className='post' draggable = 'true' onDragStart={e => dragStart(e)}  onDragEnd = {e => dragEnd(e)} onClick={() =>  redact()} >
                {text}
            <h1 >{title}</h1>
            
            <h3>{body}</h3>    
            <p>{id}</p>
            <p style={{color: 'red', fontSize: '30px', cursor: 'pointer'}} onClick = {() => removePost(id)} >X</p>
            </div>
        
        </div>
    );
};

export default Post;