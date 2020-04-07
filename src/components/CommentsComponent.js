import React from 'react';



function CommentsComponent(props) {
    const obj = props.comments;

    const listItems = obj.map((obj) =>
        <div>
            <li>{obj.text}</li>

        </div>

    );
    return (
        <ul>{listItems}</ul>
    );
}

export default CommentsComponent