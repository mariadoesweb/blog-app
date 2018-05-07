import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const PostListItem = (props) => {
    return (
        <React.Fragment>
            <li className="collection-header"><Link to={`posts${props.postId}`}><h5>{props.title}</h5></Link></li>
            <li className="collection-item">{props.text}</li>
        </React.Fragment>
    )
}
PostListItem.propTypes = {
    postId:PropTypes.number.isRequired, 
    title:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
}



export default PostListItem;