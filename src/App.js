import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import DetailsPage from './containers/DetailsPage/DetailsPage';
import * as RouterEndpoints from './utilities/RouterEndpoints';

import './App.css';
import HomeLayout from './containers/HomeLayout/HomeLayout';
import Topbar from './components/Topbar/Topbar';
import RegisterPage from './containers/RegisterPage/RegisterPage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showImage: true,
      blogList: [],
      showError: false,
      userLoggedIn: true,
      totalCount: 0,
    }
  }

  onButtonClick = () => {
    const updatedValue = false;
    this.setState({showImage: updatedValue});
  }

  updateTotalCount = () => {
    const updatedValue = this.state.totalCount;
    this.setState({totalCount: updatedValue});
  }

  getBlogList = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response);
      this.setState({blogList: response.data});
    })
    .catch(err => {
      console.log(err);
      this.setState({showError: true});
    })
  }

  render() {
    return(
      <BrowserRouter>
        <div>
            <Topbar totalCount={this.state.totalCount} />
            <Switch>
              <Route exact path={RouterEndpoints.DETAILS_PAGE + '/:postId'} render={(props) => ( this.state.userLoggedIn ? <DetailsPage {...props} /> : <Redirect to={'/register'} />)} />
              <Route path={'/register'} render={() => <RegisterPage />} />
              <Route exact path={'/'} render={() => <HomeLayout likeClick={this.updateTotalCount} />} />
              <Route render={() => <h1>Not Found</h1>} />              
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
