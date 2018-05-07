import React from 'react';
import PostListItem from './PostListItem';
import PropTypes from "prop-types"

const PostsList = (props) => {

    const results = props.data;
    let posts = results.map(post => 
        <PostListItem title={post.title} text={post.text} postId={post.postId} key={post.postId} />
    );

    return (
        <div className='container all-posts'>
            <h4 className='center-align all-posts'>POSTS</h4>
            <ul className="collection with-header">
                {posts}
            </ul>
        </div>
    )
}
PostsList.propTypes = {
    data:PropTypes.array.isRequired
}


export default PostsList;