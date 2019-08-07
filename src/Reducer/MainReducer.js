const initialState = {
    totalLikesCount: 0,
    listCount: 0,
    blogItem: 0,
}

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

export default mainReducer;