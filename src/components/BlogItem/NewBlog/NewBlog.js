import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import classes from './NewBlog.module.css';

const NewBlog = (props) => {
    return(
        <Link>
            <div className={classes.PostCard}>
                <h3>{props.item.title}</h3>
                <button onClick={props.likeClicked}>Like</button>
            </div>
        </Link>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        likeClicked: () => dispatch({type: 'LIKE_CLICKED'})
    }
}

export default connect(null, mapDispatchToProps)(NewBlog);