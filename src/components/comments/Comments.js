import React from 'react';
import Comment from "./Comment";



function Comments(props) {

    const comments = props.comments;

    if (comments!=null){
        // console.log("comments is : "+ comments)

        return (
            <div className="container">
                <h1>{"Comments is: "}</h1>
                <div>
                    {/* eslint-disable-next-line array-callback-return */}
                    {comments.map((comment,value)=>{
                        if (comment!=null&& comment.text!=null ){
                            return(
                                <div key={comment.id}>
                                    <Comment comment={comment}/>
                                </div>
                                )
                        }
                    })}
                    <p>End of Comments</p>
                </div>

            </div>)
    }

    return (
        <div>
          <p>No comments</p>
        </div>
    );
}



export default Comments;