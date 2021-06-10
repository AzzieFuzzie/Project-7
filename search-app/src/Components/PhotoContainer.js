import React from 'react';
import Photo from './Photo';
import Notfound from './Notfound';

// Displays photos from depending on which state is passed through props
const PhotoContainer = (props) => {
  const results = props.data;
  let pictures;

  // Checks to see if no data is returned from search results
  if (results.length > 0) {
    pictures = results.map((pic) => (
      <Photo
        url={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
        key={pic.id}
        title={pic.title}
      />
    ));
  } else {
    pictures = <Notfound />;
  }

  return (
    <div className='photo-container'>
      <ul>{pictures}</ul>;
    </div>
  );
};

export default PhotoContainer;
