import * as actionNames from '../actions/actionNames';

function blogs(state = {blogs: [], 
        fetchingBlogs: false,
        fetchedBlogs: false,
        fetchBlogsError: null}, action){
    switch(action.type){
        case actionNames.FETCH_BLOGS + "_PENDING":
            console.log("fetching blogs")
            return {...state, fetchingBlogs: true};
        case actionNames.FETCH_BLOGS + "_FULFILLED":
            console.log("fetched blogs")
            return {...state, fetchingBlogs: false, fetchedBlogs: true, blogs: action.payload.data};
        case actionNames.FETCH_BLOGS + "_REJECTED":
            console.log("fetch blogs rejected")
            return {...state, fetchingBlogs: false, error: action.payload};
        case actionNames.CREATE_BLOG:
            console.log("create blog: " + action.id);
            return [...state, {id: action.id, ulr: action.url}];
        case actionNames.UPDATE_BLOG:
            console.log("Update blog: " + action.id);
            var blog = state.find(b => b.id === action.id);
            const index = state.findIndex(b => b.id === action.id);
            if(index !== -1)
            {               
                console.log("found blog: " + action.id);
                return [state.slice(0, index), {...blog, url: action.url}, state.slice(index + 1)];   
            }else{
                console.log("NOT found blog: " + action.id);
                return state;
            }
    }

    return state;
}

export default blogs;