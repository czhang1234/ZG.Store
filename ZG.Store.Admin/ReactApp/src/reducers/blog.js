import * as actionNames from '../actions/actionNames';

function blog(state = {blog: {}, 
        fetchingBlog: false,
        fetchedBlog: false,
        fetchBlogError: null,
        updatingBlog: false,
        updatedBlog: false,
        updateBlogError: null}, action){
    switch(action.type){
        case actionNames.FETCH_BLOG + "_PENDING":
            console.log("fetching blog")
            return {...state, fetchingBlog: true};
        case actionNames.FETCH_BLOG + "_FULFILLED":
            console.log("fetched blog")
            return {...state, fetchingBlog: false, fetchedBlog: true, blog: action.payload.data};
        case actionNames.FETCH_BLOG + "_REJECTED":
            console.log("fetch blog rejected")
            return {...state, fetchingBlog: false, error: action.payload};

        case actionNames.CREATE_BLOG:
            console.log("create blog: " + action.id);
            return [...state, {id: action.id, ulr: action.url}];

        case actionNames.UPDATE_BLOG + "_PENDING":
            console.log("updating blog")
            return {...state, updatingBlog: true};
        case actionNames.UPDATE_BLOG + "_FULFILLED":
            console.log("updated blog")
            return {...state, updatingBlog: false, updatedBlog: true, blog: action.payload.data};
        case actionNames.UPDATE_BLOG + "_REJECTED":
            console.log("update blogs rejected")
            return {...state, updatingBlogs: false, updateBlogError: action.payload};
    }

    return state;
}

export default blog;