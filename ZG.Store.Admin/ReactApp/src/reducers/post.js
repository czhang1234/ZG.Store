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

//once the state is changed by reducer, react will re-render the UI (only the part that need to change)
function post(state = initialState, action){
    switch(action.type){
        case actionNames.FETCH_POST + "_PENDING":
            return {...state, fetchingPost: true};
        case actionNames.FETCH_POST + "_FULFILLED":
            return {...state, fetchingPost: false, fetchedPost: true, post: action.payload.data};
        case actionNames.FETCH_POST + "_REJECTED":
            return {...state, fetchingPost: false, error: action.payload};

        case actionNames.CREATE_POST + "_PENDING":
            return {...state, creatinggPost: true};
        case actionNames.CREATE_POST + "_FULFILLED":
            return {...state, creatingPost: false, createdPost: true, post: action.payload.data};
        case actionNames.CREATE_POST + "_REJECTED":
            return {...state, creatingPost: false, createPostError: action.payload};

        case actionNames.UPDATE_POST + "_PENDING":
            return {...state, updatingPost: true};
        case actionNames.UPDATE_POST + "_FULFILLED":
            return {...state, updatingPost: false, updatedPost: true, post: action.payload.data};
        case actionNames.UPDATE_POST + "_REJECTED":
            return {...state, updatingPost: false, updatePostError: action.payload};

        case actionNames.RESET_SELECTED_POST:
            return initialState;
    }

    return state;
}

export default post;