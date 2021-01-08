import React from 'react';
import Comment from './Comment';

function Comments({comments=[], delComment}) {
    return (
        comments.map(c => (
            <Comment
                key={c.id}
                id={c.id}
                text={c.text}
                delComment={delComment}
            />
        ));
    );
};

export default Comments;