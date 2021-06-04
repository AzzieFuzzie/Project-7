import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
  const results = props.data;

  const pictures = results.map((pic) => (
    <Photo
      url={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
      key={pic.id}
      title={pic.title}
    />
  ));

  return (
    <div className='photo-container'>
      <ul>{pictures}</ul>;
    </div>
  );
};

export default PhotoContainer;
