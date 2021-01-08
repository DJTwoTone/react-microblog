import React, { useState } from 'react';


function CommentForm({addComment}) {
    const [text, setText] = useState();

    function handleSubmit(evt) {
        evt.preventDefault();
        addComment(text);
        setText("");
    }


    function handleChange(evt) {
        setText(evt.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input  
                        id="commentform-text"
                        name="text"
                        size="100"
                        placeholder="Wanna say sumthin'?"
                        className="form-control"
                        value={text}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-primary">Add Comment</button>

            </form>


        </div>
    )

}

export default CommentForm;