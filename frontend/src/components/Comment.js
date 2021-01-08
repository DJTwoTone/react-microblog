import React from 'react';


function Comment({id, text, delComment}) {
    
    function handleDel(evt) {
        delComment(id);
    }

    return (
        <div>
            <p>
                {delComment && (
                    <i className="fa fa-times text-danger" 
                        onClick={handleDel}/>
                )}
                {text}
            </p>
        </div>
    )
}

export default Comment;