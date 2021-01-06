import {
    FETCH_POST,
    ADD_POST,
    DEL_POST,
    UPDATE_POST,
    ADD_COMMENT,
    DEL_COMMENT
} from '../actions/types'

export default function rootReduser(state={}, action) {
    let p = state[action.postId];

    switch (action.type) {

        case FETCH_POST:
            return { 
                ...state, 
                [action.post.id]: action.post
            };

        case ADD_POST:
            return { 
                ...state,
                [action.post.id]: {action.post, comments: [] }
            };

        case UPDATE_POST:
            return {
                ...state,
                [action.post.id]: {
                    ...action.post,
                    comments: state[action.post.id].comments
                }
            };

        case DEL_POST:
            let posts = { ...state };
            delete posts[action.postId];
            return posts;

        case ADD_COMMENT:
            return {
                ...state,
                [action.postId]: { ...p, comments: [ ...p.comments, action.comment] }
            };

        case DEL_COMMENT:
            return {
                ...state,
                [action.postId]: { ...p, comments: p.comments.filter(c => c.id !== action.commentId)}
            };

        default:
            return state;

    }
}