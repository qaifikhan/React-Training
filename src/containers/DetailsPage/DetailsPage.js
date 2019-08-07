import React, { Component} from 'react';
import axios from 'axios';

import ShowLoader from '../../hoc/ShowLoader/ShowLoader';

class DetailsPage extends Component {
    state = {
        blogDetails: {},
        load: true,
    }

    getBlogDetails = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.postId)
        .then((response) => {
            console.log(response.data);
            
            this.setState({blogDetails: response.data, load: false});
        })
        .catch()
    }

    componentDidMount() {
        this.getBlogDetails();
    }

    render() {
        console.log(this.props);
        return(
            <ShowLoader showLoader={this.state.load}>
                <div>
                    <h1>Title: {this.state.blogDetails.title}</h1>
                    <h3>Id: {this.state.blogDetails.id}</h3>
                    <h3>UserId: {this.state.blogDetails.userId}</h3>
                    <p>Desc: {this.state.blogDetails.body}</p>
                </div>
            </ShowLoader>
        )
    }
}

export default DetailsPage;