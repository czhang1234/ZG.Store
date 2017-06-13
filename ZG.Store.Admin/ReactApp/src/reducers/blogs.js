import * as actionNames from '../actions/actionNames';

function blogs(state = [], action){
    switch(action.type){
        case actionNames.CREATE_BLOG:
            console.log("creating blog: " + action.id);
            return [...state, {id: action.id, ulr: action.url}];
        case actionNames.UPDATE_BLOG:
            console.log("Updating blog: " + action.id);
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