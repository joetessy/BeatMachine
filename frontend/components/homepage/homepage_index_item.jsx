import React from 'react';
import TrackButton from './../track/track_button';

const HomePageIndexItem = (props) => {
  return(
    <li className='home-index-item'>
      <img src={props.track.image_url}/>
        <TrackButton
          track={props.track}/>
      <div className='home-index-title'>{props.track.title}</div>
      <div className='home-index-artist'>{props.track.artist}</div>
    </li>

  );
};

export default HomePageIndexItem;
