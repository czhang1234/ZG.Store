import * as actionNames from '../actions/actionNames';

function blog(state = {blog: {}, 
        fetchingBlog: false,
        fetchedBlog: false,
        fetchBlogError: null}, action){
    switch(action.type){
        case actionNames.FETCH_BLOG + "_PENDING":
            console.log("fetching blog")
            return {...state, fetchingBlog: true};
        case actionNames.FETCH_BLOG + "_FULFILLED":
            console.log("fetched blog")
            return {...state, fetchingBlog: false, fetchedBlog: true, blog: action.payload.data};
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

export default blog;