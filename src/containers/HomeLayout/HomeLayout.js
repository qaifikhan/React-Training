import React, { Component} from 'react';
import axios from 'axios';

import NewBlog from '../../components/BlogItem/NewBlog/NewBlog';

class HomeLayout extends Component {
    state = {
        blogList: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
            console.log(response.data);
            this.setState({blogList: response.data});
        })
        .catch()
    }

    render() {
        const blogs = this.state.blogList.map((item, pos) => {
            return(
                <NewBlog item={item} likeClick={this.props.likeClick} />
            )
        });
        return(
            <div>
                <h1>Home Page</h1>
                {blogs}
            </div>
        )
    }
}

export default HomeLayout;