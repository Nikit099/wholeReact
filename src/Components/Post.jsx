import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Post = ({title, body, id, removePost,  dragOver, drop, dragLeave, dragStart, dragEnd}) => {


    return (
        <div className='cell'  onDrop = {e => drop(e)}  onDragOver = {e => dragOver(e)} onDragLeave = {e => dragLeave(e)}   >
            <div className='post' draggable = 'true' onDragStart={e => dragStart(e)}  onDragEnd = {e => dragEnd(e)} >
            <h1 >{title}</h1>
            <h3>{body}</h3>
            <p>{id}</p>
            <button onClick = {() => removePost(id)} >Удалить</button>
            <button style={{margin: '0 0 0 8px'}} ><Link to={`/Posts/${id}`} className='Link' style={{fontSize: '13px'}} >Открыть</Link></button>
            </div>
        </div>
    );
};

export default Post;