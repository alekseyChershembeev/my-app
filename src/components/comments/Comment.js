import React from 'react';



function Comment(props) {

    const  comment = props.comment;
    return (
        <div>
            <h2>SubComment from {comment.user}: </h2>
            <p>{comment.text}</p>
        </div>
    );
}



export default Comment;