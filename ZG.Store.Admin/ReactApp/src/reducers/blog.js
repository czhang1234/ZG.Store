import * as actionNames from '../actions/actionNames';

const initialState = {blog: {}, 
        fetchingBlog: false,
        fetchedBlog: false,
        fetchBlogError: null,
        creatingBlog: false,
        createdBlog: false,
        createBlogError: null,
        updatingBlog: false,
        updatedBlog: false,
        updateBlogError: null};

//once the state is changed by reducer, react will re-render the UI (only the part that need to change)
function blog(state = initialState, action){
    switch(action.type){
        case actionNames.FETCH_BLOG + "_PENDING":
            return {...state, fetchingBlog: true};
        case actionNames.FETCH_BLOG + "_FULFILLED":
            return {...state, fetchingBlog: false, fetchedBlog: true, blog: action.payload.data};
        case actionNames.FETCH_BLOG + "_REJECTED":
            return {...state, fetchingBlog: false, error: action.payload};

        case actionNames.CREATE_BLOG + "_PENDING":
            return {...state, creatingBlog: true};
        case actionNames.CREATE_BLOG + "_FULFILLED":
            return {...state, creatingBlog: false, createdBlog: true, blog: action.payload.data};
        case actionNames.CREATE_BLOG + "_REJECTED":
            return {...state, creatingBlog: false, error: action.payload};

        case actionNames.UPDATE_BLOG + "_PENDING":
            return {...state, updatingBlog: true};
        case actionNames.UPDATE_BLOG + "_FULFILLED":
            return {...state, updatingBlog: false, updatedBlog: true, blog: action.payload.data};
        case actionNames.UPDATE_BLOG + "_REJECTED":
            return {...state, updatingBlogs: false, updateBlogError: action.payload};

        case actionNames.RESET_SELECTED_BLOG:
            return initialState;
    }

    return state;
}

export default blog;