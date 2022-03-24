import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button';
import PostList from '../Components/PostList';
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import { getPagesArray } from '../utils/pages';
import Pagination from '../UI/Pagination';
import SortAndSearch from '../Components/SortAndSearch';
function Posts() {

    const [value, setValue] = useState({title: '', body: ''})
    const [post, setPost] = useState([])
    const [limit, setLimit] = useState(8)
    const [page, setPage] = useState(1)
    const [id, setId] = useState(101)
    const [totalPages, setTotalPages] = useState(0)
const [filter, setFilter] = useState({sort: '', query: ''})

    let pagesArray = getPagesArray(totalPages)
    const [fetchData, isLoading, error] = useFetching( async () => {
        const posts = await PostService.getAll(limit, page)
        setPost(posts.data)
        const totalCount = posts.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    useEffect(  ()=> {
        fetchData()
    }, [page])


    const sortedPosts =  useMemo(() => {
        if(filter.sort){
            if(filter.sort === 'id'){
                return [...post].sort((a, b) => a[filter.sort] - b[filter.sort] )
            }
            return [...post].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]) )
        }
        return post
    }, [post, filter.sort]) 


    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])



    const Drow = (e) => {
        e.preventDefault()
        const newPost = {
            title: value.title, 
            body: value.body,
            id: id
        }
        setPost([ ...post,  newPost])
        setValue ({title: '', body: ''})
        setId(id + 1)
    }
    const removePost = (id) => {
        setPost(post.filter(i => i.id !== id))
    }
  
    return ( 
        <div className = "App">
          <form onSubmit={ value.title !== '' && value.body !== '' ? Drow : (e) => e.preventDefault() } > 
            <Input value = {value.title} setValue = {e => setValue({...value, title: e.target.value})} />
            <Input value = {value.body} setValue = {e => setValue({...value, body: e.target.value})} />
            <Button>Вывести</Button>
            </form>
            <SortAndSearch filter={filter} setFilter = {setFilter} />

            {error && <h1>Произошла ошибка {error}</h1>}
            {isLoading ? <div style = {{display: 'flex', justifyContent: 'center', marginTop: 60}}><Loader /> </div> : <PostList post = {sortedAndSearchPosts} removePost = {removePost} setPost = {setPost}/>}
            <Pagination isLoading={isLoading} page = {page} setPage = {setPage} pagesArray = {pagesArray}  />
          
            </div>
    );
}

export default Posts;