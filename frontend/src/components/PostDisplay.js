import React from 'react';


function PostDisplay({post, toggleEdit, delPost}) {

    const {title, description, body, votes} = post;

    return (
        <div className="PostDisplay">
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div>{body}</div>
            </div>

            <div className="PostDisplay-icons">
                <div className="PostDisplay-edit">
                    <i className="fas fa-edit text-primary"
                        onClick={toggleEdit}/>
                    <i className="fas fa-times text-danger"
                        onClick={delPost}/>
                </div>

            </div>
        </div>
    )

}

export default PostDisplay;