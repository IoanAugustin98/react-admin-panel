import React from 'react';
import PostItem from './PostItem';

function PostList(props) {
    const { posts } = props;

    return (
        <div className='liste'>
            <h2>Lista postarilor:</h2>
            { posts.map((post, index) => {
                return <PostItem
                    userId  = { post.userId }
                    id      = { post.id }
                    title   = { post.title }
                    body    = { post.body }
                    key     = { index }
                />
            })}
        </div>
    );
}

export default PostList;