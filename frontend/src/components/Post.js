import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PostForm from './PostForm';
import PostDisplay from './PostDisplay';


function Post(props) {

    const postid = +useParams().postId;
    const [isEditing, setIsEditing] = useState(false);
    const history = useHistory();

    function toggleEdit() {
        setIsEditing(edit => !edit);
    };

    function edit({title, description, body}) {

        toggleEdit();
    }

    function delPost() {


        history.push('/');
    }


    return (
        <div className="Post">

            {isEditing
             ? <PostForm post={post} save={edit} cancel={toggleEdit}/>
             : <PostDisplay post={post}
                 toggleEdit={toggleEdit} 
                 delPost={delPost}/>
                 }



        </div>
    )
}




export default Post;