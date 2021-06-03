import React, { Component } from 'react';
import apiKey from '../config';
// import Photo from './Components/Photo';
import Nav from './Nav';
import Search from './Search';
import Notfound from './Notfound';
import Photo from './Photos';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      pics: [],
    };
  }

  // componentDidMount() {
  //   const query = 'cats';
  //   fetch(
  //     ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({ pics: data.photos.photo });
  //     })
  //     .catch((error) => {
  //       console.log('Error fecthing data, error');
  //     });
  // }

  componentDidMount() {}
  performSearch = (query) => {
    fetch(
      ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1`
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

  render() {
    console.log(this.state.pics);
    return (
      <BrowserRouter>
        <div className='container'>
          <Search onSearch={this.performSearch} />
          {/* <Photo data={this.state.pics} /> */}
          <Route path='/' component={Nav} />
          <Route path='/cats' component={Photo} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
