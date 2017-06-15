import * as actionNames from './actionNames';

import axios from 'axios';

const blogPostUlr = "http://localhost:50105/api/blogpost/";

export function fetchPosts(blogId){
    return {
        type: actionNames.FETCH_POSTS,
        payload: axios.get(`http://localhost:50105/api/blogposts/${blogId}`)
    }
}

export function fetchPost(id){
    return {
        type: actionNames.FETCH_BLOG,
        payload: axios.get(`${blogPostUlr}id`)
    }
}

export function createPost(blogId, title, content, visibility, allowComments){
    return {
        type: actionNames.CREATE_POST,
        payload: axios.post(`${blogPostUlr}`, {
            blogId,
            title,
            content,
            visibility,
            allowComments,  
            likes: 0          
        })
    }
}

export function updatePost(postId, blogId, title, content, visibility, allowComments, likes){
    return {
        type: actionNames.UPDATE_POST,
        payload: axios.put(`${blogPostUlr}`, {
            postId,
            blogId,
            title,
            content,
            visibility,
            allowComments,  
            likes       
        })
    }
}