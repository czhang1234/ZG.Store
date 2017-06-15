import * as actionNames from './actionNames';
import axios from 'axios';

export function fetchBlogs(){
    return {
        type: actionNames.FETCH_BLOGS,
        payload: axios.get('http://localhost:50105/api/blog')
    }
}

export function fetchBlog(id){
    return {
        type: actionNames.FETCH_BLOG,
        payload: axios.get('http://localhost:50105/api/blog/' + id)
    }
}

export function createBlog(url){
    return {
        type: actionNames.CREATE_BLOG,
        payload: axios.post("http://localhost:50105/api/blog", {
            blogId: 0,
            url: url,
        })
    }
}

export function updateBlog(id, url){
    return{
        type: actionNames.UPDATE_BLOG,
        payload: axios.put("http://localhost:50105/api/blog/" + id, {
            blogId: id,
            url: url,
        })
    }
}