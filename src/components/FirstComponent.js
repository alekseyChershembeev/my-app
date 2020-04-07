import React from 'react';
import CommentsComponent from "./CommentsComponent";



function FirstComponent(props) {
    const obj = props.arr;

    const listItems = obj.map((obj) =>
        <div>
            <li>{obj.title}</li>
            <br/>
            <li>{new Date(obj.date).getTime()}</li>
            <br/>
            <li>{obj.text}</li>
            <br/>
            {/*<CommentsComponent comments ={obj.comments}/>*/}


        </div>

    );
    return (
        <ul>{listItems}</ul>
    );
}

export default FirstComponent;