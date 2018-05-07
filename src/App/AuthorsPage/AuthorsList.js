import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const AuthorsList = (props) => {
    return (
        <div className='container'>
            <h5 className='center-align'>AUTHORS ({props.authors.length})</h5>
            <div className="collection">
                {props.authors.map((author) => {
                    return(<Link to={`/author${author.authorId}`} className="collection-item" key={author.authorId}><h5 className='author-list'>{author.name}</h5></Link>)
                })}
                
            </div>
        </div>
    )
}

AuthorsList.propTypes = {
    authors: PropTypes.array.isRequired
}



export default AuthorsList;