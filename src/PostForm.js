import React, { useState } from 'react';

function PostForm({post, save, cancel}) {

    const [postData, setPostData] = useState({
        title: post.title,
        description: post.description,
        body: post.body
    })

    function handleChange(evt) {
        const {name, value} = evt.target;
        setPostData(data => ({
            ...data, 
            [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        // save(postData)
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="form-title">TITLE:</label>
                <input 
                id="form-title"
                name='title'
                className="form-control"
                onChange={handleChange}
                value={postData.title}
                />
            </div>


            <div className="form-group">
                <label htmlFor="form-title">DESCRIPTION:</label>
                <input 
                id="form-description"
                name='description'
                className="form-control"
                onChange={handleChange}
                value={postData.description}
                />
            </div>


            <div className="form-group">
                <label htmlFor="form-body">BODY:</label>
                <input 
                id="form-body"
                name='body'
                className="form-control"
                onChange={handleChange}
                value={postData.body}
                />
            </div>

            <button className="btn btn-primary">SAVE</button>
            {/* <button onClick={cancel} className="btn btn-secondary">CANCEL</button> */}
            

        </form>
    )
}

export default PostForm;