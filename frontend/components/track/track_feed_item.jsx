import React from 'react';
import ReactHowler from 'react-howler';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


const TrackFeedItem = (props) => {
  let trackMenu = null;
  if (props.track.artist_id === props.currentUser.id &&
    props.location.pathname.slice(1) === props.track.artist){
    trackMenu =
    <div className='dropdown'>
      <div className='options'>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          <div className='dropdown-content'>
            <ul>
              <li>
                <Link to={`/${props.currentUser.username}/${props.track.title}/edit`}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
                  Edit
                </Link>
              </li>
              <li>
                <Link to={`/${props.currentUser.username}/${props.track.title}/delete`}>
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
      <img className='track-image'src={props.track.image_url} />
      <div className='track-content'>
        <div className='track-header'>
          <div className='play-button'></div>
          <div className='track-metadata'>
            <div className='track-artist'>
              <Link
                to={`/${props.track.artist}`}>
              {props.track.artist}
              </Link>
            </div>
            <div className='track-title'>
              {props.track.title}
            </div>
          </div>
        </div>
          <div className='track-waveform'>
            <audio controls="controls">
              <source src={props.track.audio_url} />
            </audio>
          </div>
          {trackMenu}
      </div>
    </div>
  );

};

export default withRouter(TrackFeedItem);
