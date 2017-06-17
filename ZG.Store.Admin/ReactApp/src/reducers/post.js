import * as actionNames from '../actions/actionNames';

const initialState = {post: {}, 
        fetchingPost: false,
        fetchedPost: false,
        fetchPostError: null,
        creatingPost: false,
        createdPost: false,
        createPostError: null,
        updatingPost: false,
        updatedPost: false,
        updatePostError: null};

function post(state = initialState, action){
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

        case actionNames.CREATE_POST + "_PENDING":
            console.log("creating post")
            return {...state, creatinggPost: true};
        case actionNames.CREATE_POST + "_FULFILLED":
            console.log("created post")
            return {...state, creatingPost: false, createdPost: true, post: action.payload.data};
        case actionNames.CREATE_POST + "_REJECTED":
            console.log("create post rejected")
            return {...state, creatingPost: false, createPostError: action.payload};

        case actionNames.UPDATE_POST + "_PENDING":
            console.log("updating post")
            return {...state, updatingPost: true};
        case actionNames.UPDATE_POST + "_FULFILLED":
            console.log("updated post")
            return {...state, updatingPost: false, updatedPost: true, post: action.payload.data};
        case actionNames.UPDATE_POST + "_REJECTED":
            console.log("update post rejected")
            return {...state, updatingPost: false, updatePostError: action.payload};

        case actionNames.RESET_SELECTED_POST:
            console.log("reset selected post");
            return initialState;
    }

    return state;
}

export default post;