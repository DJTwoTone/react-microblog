import {
    FETCH_TITLES,
    ADD_POST,
    UPDATE_POST,
    DEL_POST,
    VOTE
} from "../actions/types";

function makeTitle({ id, title, description }) {
    return {id, title, description};
}

function sortByVotes(posts) {
    return posts.sort((a, b) => b.votes - a.votes);
}

export default function rootReducer(state = [], action) {
    switch(action.type) {

        case FETCH_TITLES:
            return sortByVotes([...action.titles]);

        case ADD_POST:
            return sortByVotes([...state, makeTitle(action.posts)]);
        
        case DEL_POST:
            return state.filter(title => title.id !== action.postId);

        case UPDATE_POST:
            return state.map(title => title.id === action.post.id ?
                makeTitle(action.post) :
                title);

        case VOTE:
            return state.map(title => title.id === action.postId 
                ? { ...title, votes: action }
                : title);

        default:
            return state;

    };
};