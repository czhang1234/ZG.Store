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
    }

    return state;
}

export default blogs;