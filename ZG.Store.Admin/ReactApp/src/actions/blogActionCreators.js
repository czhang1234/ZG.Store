import * as actionNames from './actionNames';
import axios from 'axios';

export function fetchBlogs(){
    return {
        type: actionNames.FETCH_BLOGS,
        payload: axios.get('http://localhost:50105/api/blog')
    }
}

export function createBlog(url){
    return {
        type: actionNames.CREATE_BLOG,
        id,
        url
    }
}

export function updateBlog(id, url){
    return{
        type: actionNames.UPDATE_BLOG,
        id,
        url
    }
}