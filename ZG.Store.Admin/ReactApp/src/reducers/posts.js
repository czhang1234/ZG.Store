import * as actionNames from '../actions/actionNames';

function posts(state = {posts: [], 
        fetchingPosts: false,
        fetchedPosts: false,
        fetchPostsError: null}, action){
    switch(action.type){
        case actionNames.FETCH_POSTS + "_PENDING":
            console.log("fetching posts")
            return {...state, fetchingPosts: true};
        case actionNames.FETCH_POSTS + "_FULFILLED":
            console.log("fetched posts")
            return {...state, fetchingPosts: false, fetchedPosts: true, posts: action.payload.data};
        case actionNames.FETCH_POSTS + "_REJECTED":
            console.log("fetch posts rejected")
            return {...state, fetchingPosts: false, error: action.payload};

        case actionNames.CREATE_POST + "_FULFILLED":        
            let data = action.payload.data;

            return {...state, 
                posts: state.posts.concat(data)
            }

        case actionNames.UPDATE_POST + "_FULFILLED":        
            let updatedPost = action.payload.data;

            let index = state.posts.findIndex(b => b.postId === updatedPost.postId);
            return {...state, 
                posts: [...state.posts.slice(0, index), 
                    {...state.posts[index], title: updatedPost.title, content: updatedPost.content, status: updatedPost.status, 
                        visibility: updatedPost.visibility, allowComments: updatedPost.allowComments, likes: updatedPost.likes, blogId: updatedPost.blogId
                    }, 
                    ...state.posts.slice(index + 1)]};
    }

    return state;
}

export default posts;