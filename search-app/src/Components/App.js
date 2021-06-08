import React, { Component } from 'react';
import apiKey from '../config';
import Nav from './Nav';
import Search from './Search';
import Notfound from './Notfound';
import PhotoContainer from './PhotoContainer';

import { withRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      pics: [],
      dogs: [],
      horses: [],
      water: [],
    };
  }

  // Allows users to search for images and then uses fetch to retrieve data
  componentDidMount(query) {
    this.performSearch();
    this.dogsResults();
    this.horsesResults();
    this.waterResults();
  }
  // Allows for users search to searh

  performSearch = (query = 'water') => {
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

  // Shows results for dogs when dog nav clicked
  dogsResults = (query = 'dogs') => {
    fetch(
      ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ dogs: data.photos.photo });
      })
      .catch((error) => {
        console.log('Error fecthing data', error);
      });
  };

  // Shows results for horses when horses nav clicked
  horsesResults = (query = 'horses') => {
    fetch(
      ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ horses: data.photos.photo });
      })
      .catch((error) => {
        console.log('Error fecthing data', error);
      });
  };

  // Shows results for water when water nav clicked
  waterResults = (query = 'water') => {
    fetch(
      ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ water: data.photos.photo });
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

        <Switch>
          <Route
            exact
            path='/'
            render={() => <PhotoContainer data={this.state.pics} />}
          />
          <Route
            exact
            path='/water'
            render={() => <PhotoContainer data={this.state.water} />}
          />
          <Route
            exact
            path='/dogs'
            render={() => <PhotoContainer data={this.state.dogs} />}
          />
          <Route
            exact
            path='/horses'
            render={() => <PhotoContainer data={this.state.horses} />}
          />
          <Route component={Notfound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
