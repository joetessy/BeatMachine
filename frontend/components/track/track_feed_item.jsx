import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import DeleteTrackContainer from './delete_track_container';
import EditTrackContainer from './edit_track_form_container';
import TrackButton from './track_button';

const TrackFeedItem = (props) => {
  let trackMenu = null;
  if (props.track.artist_id === props.currentUser.id &&
    props.location.pathname.slice(1) === props.track.artist)
    {
    trackMenu =
    <div className='dropdown'>
      <div className='options'>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          <div className='dropdown-content'>
            <ul>
              <li onClick={()=> (props.openModal(<EditTrackContainer
                track={props.track}/>))}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
                  Edit
              </li>
              <li onClick={()=> (props.openModal(<DeleteTrackContainer
                  track={props.track}/>))}>
                <i className="fa fa-trash" aria-hidden="true"></i>
                  Delete
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
          <TrackButton
            track={props.track}/>
          <div className='track-metadata'>
            <div className='track-artist'>
              <NavLink
                to={`/${props.track.artist}`}>
              {props.track.artist}
            </NavLink>
            </div>
            <div className='track-title'>
            <Link to={`/${props.track.artist}/${props.track.title}`}>
              {props.track.title}
            </Link>
            </div>
          </div>
        </div>
          <div className='track-waveform'>
            <img className='wave' src={window.images.wave}/>
          </div>
          {trackMenu}
      </div>
    </div>
  );

};

export default withRouter(TrackFeedItem);
