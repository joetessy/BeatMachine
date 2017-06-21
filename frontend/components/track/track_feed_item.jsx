import React from 'react';
import ReactHowler from 'react-howler';

const TrackFeedItem = ({track}) => {
  return (
    <div className='track-body'>
      <img className='track-image'src={track.image_url} />
      <div className='track-content'>
        <div className='track-header'>
          <div className='play-button'></div>
          <div className='track-metadata'>
            <div className='track-artist'>
              {track.artist}
            </div>
            <div className='track-title'>
              {track.title}
            </div>
          </div>
        </div>
          <div className='track-waveform'>
            <ReactHowler src={track.audio_url}/>
          </div>
      </div>
    </div>
  );

};

export default TrackFeedItem;
