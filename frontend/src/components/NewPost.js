import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PostForm from "./PostForm"



function NewPost() {

    const dispatch = useDispatch();
    const history = useHistory();

    function save({ title, description, body }) {

        history.push('/');
    }

    function cancel() {
        history.push('/');
    }

    return (
        <main>
            <h1>MAKE A NEW POST</h1>
            <PostForm save={save} cancel={cancel} />
        </main>
    )

}

export default NewPost;