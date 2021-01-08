import {
    FETCH_TITLES,
    ADD_POST,
    UPDATE_POST,
    DEL_POST
} from "../actions/types";

function makeTitle({ id, title, description }) {
    return {id, title, description};
}

export default function rootReducer(state = [], action) {
    switch(action.type) {

        case DELETE_POST:
            return state.filter(title => title.id !== action.postId);

        case UPDATE_POST:
            return state.map(title => title.id === action.post.id ?
                makeTitle(action.post) :
                title);

        default:
            return state;

    };
};