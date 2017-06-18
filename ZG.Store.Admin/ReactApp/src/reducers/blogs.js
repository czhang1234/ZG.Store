import * as actionNames from '../actions/actionNames';

//once the state is changed by reducer, react will re-render the UI (only the part that need to change)
function blogs(state = {blogs: [], 
        fetchingBlogs: false,
        fetchedBlogs: false,
        fetchBlogsError: null}, action){
    switch(action.type){
        case actionNames.FETCH_BLOGS + "_PENDING":
            return {...state, fetchingBlogs: true};
        case actionNames.FETCH_BLOGS + "_FULFILLED":
            return {...state, fetchingBlogs: false, fetchedBlogs: true, blogs: action.payload.data};
        case actionNames.FETCH_BLOGS + "_REJECTED":
            return {...state, fetchingBlogs: false, error: action.payload};

        case actionNames.UPDATE_BLOG + "_FULFILLED":
            let i = state.blogs.findIndex(b => b.blogId === action.payload.data.blogId);
            return {...state, 
                blogs: [...state.blogs.slice(0, i), 
                    {...state.blogs[i], name: action.payload.data.name, url: action.payload.data.url}, 
                    ...state.blogs.slice(i +1)]};
    }

    return state;
}

export default blogs;