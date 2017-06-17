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

function blog(state = initialState, action){
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

        case actionNames.CREATE_BLOG + "_PENDING":
            console.log("creating blog")
            return {...state, creatingBlog: true};
        case actionNames.CREATE_BLOG + "_FULFILLED":
            console.log("created blog")
            return {...state, creatingBlog: false, createdBlog: true, blog: action.payload.data};
        case actionNames.CREATE_BLOG + "_REJECTED":
            console.log("create blog rejected")
            return {...state, creatingBlog: false, error: action.payload};

        case actionNames.UPDATE_BLOG + "_PENDING":
            console.log("updating blog")
            return {...state, updatingBlog: true};
        case actionNames.UPDATE_BLOG + "_FULFILLED":
            console.log("updated blog")
            return {...state, updatingBlog: false, updatedBlog: true, blog: action.payload.data};
        case actionNames.UPDATE_BLOG + "_REJECTED":
            console.log("update blogs rejected")
            return {...state, updatingBlogs: false, updateBlogError: action.payload};

        case actionNames.RESET_SELECTED_BLOG:
            console.log("reset selected blog");
            return initialState;
    }

    return state;
}

export default blog;