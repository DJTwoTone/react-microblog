import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from './PostForm';
import PostDisplay from './PostDisplay';
import { getPostFromAPI,
        sendPostToAPI, 
        updatePostInAPI,
        delPostFromAPI,
        sendCommentToAPI,
        delCommentFromAPI,
        sendVoteToAPI
    } from '../actions/posts';
import Comments from './Comments';
import CommentForm from './CommentForm';


function Post(props) {

    const postId = +useParams().postId;
    const [isEditing, setIsEditing] = useState(false);
    const history = useHistory();
    const post = useSelector(st => st.posts[postId])
    const dispatch = useDispatch();

    function toggleEdit() {
        setIsEditing(edit => !edit);
    };

    function edit({title, description, body}) {
        dispatch(updatePostInAPI(
            postId,
            title,
            description,
            body
        ));
        toggleEdit();
    }

    function delPost() {
        dispatch(delPostFromAPI(postId));
        history.push('/');
    }

    function addComment(text) {
        dispatch(sendCommentToAPI(postId, text))
    }

    function delComment(commentId) {
        dispatch(delCommentFromAPI(postId, commentId))
    }



    return (
        <div className="Post">

            {isEditing
             ? <PostForm post={post} save={edit} cancel={toggleEdit}/>
             : <PostDisplay post={post}
                 toggleEdit={toggleEdit} 
                 delPost={delPost}/>
            }

            <div className="Post-comments">
                <h3>Comments</h3>
                <Comments comments={post.comments}
                            delComment={delComment}
                />
                <CommentForm addComment={addComment}/>
                

            </div>



        </div>
    )
}




export default Post;