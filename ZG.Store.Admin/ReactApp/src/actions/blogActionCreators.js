import * as actionNames from './actionNames';
import axios from 'axios';

const blogUlr = (process.env.NODE_ENV === 'production') ? '/api/blog' : "http://localhost:50105/api/blog";

export function fetchBlogs(){
    return {
        type: actionNames.FETCH_BLOGS,
        payload: axios.get(`${blogUlr}`)
    }
}

export function fetchBlog(id){
    return {
        type: actionNames.FETCH_BLOG,
        payload: axios.get(`${blogUlr}/${id}`)
    }
}

export function createBlog(name, url){
    return {
        type: actionNames.CREATE_BLOG,
        payload: axios.post(`${blogUlr}`, {
            blogId: 0,
            name,
            url,
        })
    }
}

export function updateBlog(id, name, url){
    return{
        type: actionNames.UPDATE_BLOG,
        payload: axios.put(`${blogUlr}/${id}`, {
            blogId: id,
            name,
            url,
        })
    }
}

export function resetSelectedBlog(){
    return {
        type: actionNames.RESET_SELECTED_BLOG,
    }
}