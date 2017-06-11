import * as actionNames from '../actions/actionNames';

function posts(state = [], action){
    switch(action.type) {
        case actionNames.INCREMENT_LIKES:
            console.log("Increment likes");
            const i = action.index;
            return [...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice( i + 1)
            ];
    }
    return state;
}

export default posts;
