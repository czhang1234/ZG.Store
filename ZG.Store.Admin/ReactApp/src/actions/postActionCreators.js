import * as actionNames from './actionNames';

import axios from 'axios';

const blogPostUlr = (process.env.NODE_ENV === 'production') ? '/api/blogpost' : "http://localhost:50105/api/blogpost";
const blogPostsUlr = (process.env.NODE_ENV === 'production') ? '/api/blogposts' : "http://localhost:50105/api/blogposts";

export function fetchPosts(blogId){
    return {
        type: actionNames.FETCH_POSTS,
        payload: axios.get(`${blogPostsUlr}/${blogId}`)
    }
}

export function fetchPost(id){
    return {
        type: actionNames.FETCH_POST,
        payload: axios.get(`${blogPostUlr}/${id}`)
    }
}

export function createPost(blogId, title, content, visibility, allowComments, likes, status){
    return {
        type: actionNames.CREATE_POST,
        payload: axios.post(`${blogPostUlr}`, {
            blogId,
            title,
            content,
            visibility,
            allowComments,  
            likes,
            status             
        })
    }
}

export function updatePost(postId, blogId, title, content, visibility, allowComments, likes, status){
    return {
        type: actionNames.UPDATE_POST,
        payload: axios.put(`${blogPostUlr}/${postId}`, {
            postId,
            blogId,
            title,
            content,
            visibility,
            allowComments,  
            likes,
            status      
        })
    }
}

export function resetSelectedPost(){
    return {
        type: actionNames.RESET_SELECTED_POST,
    }
}