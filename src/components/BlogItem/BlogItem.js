import React from 'react';
import classes from './BlogItem.module.css';

const blogItem = (props) => {
    return(
        <div className={classes.BlogCard}>
            {props.showImg ? 
            <img className={classes.BlogImage} src={props.image} alt="Blog" /> : null }
            <h3 className={classes.BlogTitle}>{props.title}</h3>
            <p className={classes.BlogDesc}>{props.desc}</p>
        </div>
    );
}

export default blogItem;