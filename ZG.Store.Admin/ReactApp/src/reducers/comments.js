import * as actionNames from '../actions/actionNames';

function comments(state = {}, action) {
  console.log("comments action: " + JSON.stringify(action));
  console.log("typeof action.postId: " + (typeof action.postId));
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }

  return state;
}

function postComments(state = [], action){
    console.log("postComments: " + JSON.stringify(action));
    switch(action.type){
        case actionNames.ADD_COMMENT:
             console.log("adding comment: " + action.comment);
            return [...state, {user: action.author, text: action.comment}];
        case actionNames.REMOVE_COMMENT:
            console.log("removing comment: " + action.i);
            return [...state.slice(0, action.i), 
                    ...state.slice(action.i + 1)];
    }
    return state;
}

export default comments;

