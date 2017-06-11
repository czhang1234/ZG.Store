import * as actionNames from './actionNames';

//increment
export function increment(index){
    return {
        type: actionNames.INCREMENT_LIKES,
        index
    }
}

//add comment
export function addComment(postId, author, comment){
    return {
        type: actionNames.ADD_COMMENT,
        postId,
        author,
        comment
    }
}

//remove comment

export function removeComment(postId, i){
    return {
        type: actionNames.REMOVE_COMMENT,
        postId,
        i
    }
}