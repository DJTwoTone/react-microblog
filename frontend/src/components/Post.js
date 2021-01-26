import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from './PostForm';
import PostDisplay from './PostDisplay';
import { getPostFromAPI,
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
    console.log("postId +++++", postId)
    const [isEditing, setIsEditing] = useState(false);
    const history = useHistory();
    let store = useSelector(st => st)
    console.log('store+++++', store)
    const post = useSelector(st => st.posts[postId])
    console.log("post +++++", post)
    const dispatch = useDispatch();

    useEffect(function loadPost() {
        async function getPost() {
            console.log('pre dispatch postId:', postId)
            dispatch(getPostFromAPI(postId));
        }

        if (!post) {
            getPost();
        }
    }, [dispatch, postId, post]);


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

    function vote(id, voteType) {
        dispatch(sendVoteToAPI(id, voteType))
    }

    console.log("post +++++>", post)

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