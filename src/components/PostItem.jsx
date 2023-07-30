import React from 'react';

function PostItem(props) {
    const {userId, id, title, body } = props;

    return (
        <div>
            <h3>{ title }</h3>
            <p>{ body }</p> 
        </div>
    );
}

export default PostItem;