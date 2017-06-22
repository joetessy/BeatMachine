import React from 'react';
import ReactHowler from 'react-howler';
import { Link } from 'react-router-dom';

const TrackFeedItem = ({track}) => {
  return (
    <div className='track-body'>
      <img className='track-image'src={track.image_url} />
      <div className='track-content'>
        <div className='track-header'>
          <div className='play-button'></div>
          <div className='track-metadata'>
            <div className='track-artist'>
              <Link
                to={`/${track.artist}`}>
              {track.artist}
              </Link>
            </div>
            <div className='track-title'>
              {track.title}
            </div>
          </div>
        </div>
          <div className='track-waveform'>
            <audio controls="controls">
              <source src={track.audio_url} />
            </audio>
          </div>
      </div>
    </div>
  );

};

export default TrackFeedItem;
