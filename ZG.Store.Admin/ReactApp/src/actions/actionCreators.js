import * as actionNames from './actionNames';

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