import axios from 'axios';
import {
    FETCH_POST,
    ADD_POST,
    UPDATE_POST,
    DEL_POST,
    ADD_COMMENT,
    DEL_COMMENT,
    VOTE
} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "https://localhost:5000/api/posts";

export function getPostFromAPI(id) {
    return async function(dispatch) {
        const res = await axios.get(`${API_URL}/{id}`);
        return dispatch(getPost(res.data);)
    };
}

function getPost(post) {
    return {
        type: FETCH_POST,
        post
    }
}

export function sendPostToAPI(title, description, body) {
    return async function (dispatch) {
        const res = await axios.post(`${API_URL}`, {
            title,
            description,
            body
        });
        return dispatch(addPost(res.data));
    };
};

function addPost(post) {
    return {
        type: ADD_POST,
        post
    };
};

export function delPostFromAPI(id) {
    return async function (dispatch) {
        await axios.delete(`${API_URL}/${id}`);
        return dispatch(delPost(id));
    }
}

function delPost(postId) {
    return {
        type: DEL_POST,
        postId
    };
};

export function updatePostInAPI(id, title, description, body) {
    return async function (dispatch) {
        const res = axios.put(`${API_URL}/{id}`, {
            title, 
            description,
            body
        });
        return dispatch(updatePost(res.data));
    }
};

function updatePost(post) {
    return {
        type: UPDATE_POST,
        post
    }
};

export function sendCommentToAPI(postId, text) {
    return async function (dispatch) {
        const res = await axios.post(`${API_URL}/${postId}/comments/`, { text });
        return dispatch(addComment(postId, res.data));
    };
};

function addComment(postId, comment) {
    return {
        type: ADD_COMMENT,
        postId,
        comment
    };
};

export function delCommentFromAPI(postId, commentId) {
    return async function (dispatch) {
        await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
        return dispatch(delComment(postId, commentId))
    };
};

function delComment(postId, commentId) {
    return {
        type: DEL_COMMENT,
        postId,
        commentId
    };

};

export function sendVoteToAPI(id, voteType) {
    return async function (dispatch) {
        const res = await axios.post(`${API_URL}/${id}/vote/${voteType}`);
        return dispatch(vote(id, res.data.votes))
    }
}

function vote(postId, votes) {
    return {
        type: VOTE,
        postId,
        votes
    }
}
