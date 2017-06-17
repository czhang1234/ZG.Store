import * as actionNames from '../actions/actionNames';

function post(state = {post: {}, 
        fetchingPost: false,
        fetchedPost: false,
        fetchPostError: null,
        updatingPost: false,
        updatedPost: false,
        updatePostError: null}, action){
    switch(action.type){
        case actionNames.FETCH_POST + "_PENDING":
            console.log("fetching post")
            return {...state, fetchingPost: true};
        case actionNames.FETCH_POST + "_FULFILLED":
            console.log("fetched post")
            return {...state, fetchingPost: false, fetchedPost: true, post: action.payload.data};
        case actionNames.FETCH_POST + "_REJECTED":
            console.log("fetch post rejected")
            return {...state, fetchingPost: false, error: action.payload};

        case actionNames.CREATE_POST:
            console.log("create post: " + action.id);
            return {...state, post: action.payload.data};

        case actionNames.UPDATE_POST + "_PENDING":
            console.log("updating post")
            return {...state, updatingPost: true};
        case actionNames.UPDATE_POST + "_FULFILLED":
            console.log("updated post")
            return {...state, updatingPost: false, updatedPost: true, post: action.payload.data};
        case actionNames.UPDATE_POST + "_REJECTED":
            console.log("update post rejected")
            return {...state, updatingPost: false, updatePostError: action.payload};
    }

    return state;
}

export default post;