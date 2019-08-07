const redux = require('redux');

const initialState = {
    totalLikesCount: 0,
    listCount: 0,
    blogItem: 0,
}

//Reducer
const mainReducer = (state = initialState, action) => {
    if(action.type === 'LIKE_CLICKED') {
        return {...state, totalLikesCount: state.totalLikesCount + 1}
    }
    if(action.type === 'DISLIKE_CLICKED') {
        return {...state, totalLikesCount: state.totalLikesCount - 1}
    }
    if(action.type === 'LIKETIMES') {
        return {...state, totalLikesCount: state.totalLikesCount + action.likeCount}
    }
    return state
}

//State
const globalState = redux.createStore(mainReducer);
// console.log(globalState.getState());


//Subscription
globalState.subscribe(() => {
    console.log(globalState.getState());
});

//Dispatch
globalState.dispatch({type: 'LIKE_CLICKED'});
globalState.dispatch({type: 'DISLIKE_CLICKED'});
globalState.dispatch({type: 'LIKETIMES', likeCount: 100});