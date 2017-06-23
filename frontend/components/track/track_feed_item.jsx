import React from 'react';
import ReactHowler from 'react-howler';
import { Link } from 'react-router-dom';

const TrackFeedItem = ({track, currentUser}) => {
  let trackMenu = null;
  if (track.artist_id === currentUser.id){
    trackMenu =
    <div className='dropdown'>
      <div className='options'>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          <div className='dropdown-content'>
            <ul>
              <li>
                <Link to={`/${currentUser.username}/${track.title}/edit`}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
                  Edit
                </Link>
              </li>
              <li>
                <Link to={`/${currentUser.username}/${track.title}/delete`}>
                <i className="fa fa-trash" aria-hidden="true"></i>
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>;
  }
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
          {trackMenu}
      </div>
    </div>
  );

};

export default (TrackFeedItem);
