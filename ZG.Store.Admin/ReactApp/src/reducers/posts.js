import * as actionNames from '../actions/actionNames';

//once the state is changed by reducer, react will re-render the UI (only the part that need to change)
function posts(state = {posts: [], 
        fetchingPosts: false,
        fetchedPosts: false,
        fetchPostsError: null}, action){
    switch(action.type){
        case actionNames.FETCH_POSTS + "_PENDING":
            return {...state, fetchingPosts: true};
        case actionNames.FETCH_POSTS + "_FULFILLED":
            return {...state, fetchingPosts: false, fetchedPosts: true, posts: action.payload.data};
        case actionNames.FETCH_POSTS + "_REJECTED":
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