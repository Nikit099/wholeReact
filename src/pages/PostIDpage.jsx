import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../UI/Loader/Loader';

const PostIDpage = (props) => {
    const params = useParams()
    console.log(params.id);
    const [post, setPost] = useState({})
    const [fetchPostById, isLoader, error] = useFetching( async () => {
        const resp = await PostService.getById(params.id)
        setPost(resp.data)
    }) 
    useEffect(() => {
        fetchPostById()
    }, [])
    return ( 
        <div>
            {error && <h1 style={{color: 'red'}} >Произошла ошибка {error}</h1>}

          
        {isLoader ? <Loader/> : <div> <h2 style={{color: 'green'}} >  Пост под номером {post.id}</h2> <h1> {post.title}</h1> {post.body}  </div>  }
            
        </div>
    );
};

export default PostIDpage;