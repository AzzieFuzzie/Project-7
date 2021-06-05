import React, { Component } from 'react';
import apiKey from '../config';
import Nav from './Nav';
import Search from './Search';
// import Notfound from './Notfound';
import PhotoContainer from './PhotoContainer';

import { withRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      pics: [],
      dogs: [],
      horses: [],
      waterfalls: [],
    };
  }

  // Allows users to search for images and then uses fetch to retrieve data
  componentDidMount() {
    this.performSearch();
    console.log(this.props);
  }
  performSearch = (query = 'cats') => {
    fetch(
      ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ pics: data.photos.photo });
      })
      .catch((error) => {
        console.log('Error fecthing data', error);
      });
  };

  // Renders All main components
  render() {
    console.log(this.state.pics);
    return (
      <div className='container'>
        <Search onSearch={this.performSearch} />
        <Route path='/' component={Nav} />
        <Route
          exact
          path='/'
          render={() => <PhotoContainer data={this.state.pics} />}
        />
        <Route
          path='/water'
          render={() => <PhotoContainer data={this.state.pics} />}
        />
        <Route
          exact
          path='/dogs'
          render={() => <PhotoContainer data={this.state.pics} />}
        />
        <Route
          exact
          path='/horses'
          render={() => <PhotoContainer data={this.state.pics} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
