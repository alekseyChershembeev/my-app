import React from 'react';
import Comments from "./comments/Comments";



function FirstComponent(props) {
    const obj = props.arr;

    const listItems = obj.map((obj, index) =>
        <div key={obj.id}>
            <li>{obj.title}</li>
            <br/>
            <li>{new Date(obj.date).getTime()}</li>
            <br/>
            <li>{obj.text}</li>
            <br/>
            <Comments comments={obj.comments}/>
            }
        </div>

    );
    return (
        <ul>{listItems}</ul>
    );
}



export default FirstComponent;