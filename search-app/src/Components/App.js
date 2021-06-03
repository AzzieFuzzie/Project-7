import React, { Component } from 'react';
import apiKey from '../config';
// import Photo from './Components/Photo';
import Nav from './Nav';
import Search from './Search';
import Notfound from './Notfound';
import Photo from './Photos';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [],
    };
  }

  componentDidMount() {
    fetch(
      ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&format=json&nojsoncallback=1&auth_token=72157719336622741-e7843089f5091912&api_sig=244a9b2faf6e3df4697402af886e8dc7`
    )
      .then((responseData) => {
        this.setState({ pics: responseData.photos.photo });
      })
      .catch((error) => {
        console.log('Error fecthing data, error');
      });
  }
  render() {
    console.log(this.state.pics);
    return (
      <BrowserRouter>
        <div className='container'>
          <Route path='/' component={Search} />
          <Route path='./nav' />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
