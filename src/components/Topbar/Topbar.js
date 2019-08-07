import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import classes from './Topbar.module.css';

class Topbar extends Component {
    render() {        
        return(
            <div>
                <Link className={classes.MenuItem} to={'/'}>Home</Link>
                <Link className={classes.MenuItem} to={"/details/2"}>Details</Link>
                <p>Total Likes: {this.props.likeCount}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        likeCount: state.totalLikesCount
    }
}

export default connect(mapStateToProps)(Topbar);