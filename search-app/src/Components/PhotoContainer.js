import React from 'react';
import Photo from './Photo';
import Notfound from './Notfound';

const PhotoContainer = (props) => {
  const results = props.data;
  let pictures;
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
