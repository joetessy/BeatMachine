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
  let header = null;
  if (props.location.pathname === '/stream'){
    header = (

      <div className='track-index-item-header'>
        <NavLink to={`/${props.track.artist}`}>
          <img className='track-index-item-header-pic'
          src={props.track.artist_image}/></NavLink>
        <NavLink to={`/${props.track.artist}`}>
        {props.track.artist}</NavLink>
        has posted a
        <NavLink to={`/${props.track.artist}/${props.track.title}`}>track
        </NavLink> {props.track.time_ago} ago
      </div>
    );
  }
  let likeClass = null;
  if (props.currentUser.favorite_tracks.includes(props.track.id)){
    likeClass = 'liked-button';
  } else {
    likeClass = 'like-button';
  }

  return (
    <div className='track-feed-item'>
    {header}
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
          <div className='options-bar'>
            <div className={likeClass}>
              <i className="fa fa-heart" aria-hidden="true"></i>
            </div>
            {trackMenu}
          </div>
      </div>
    </div>
    </div>
  );

};

export default withRouter(TrackFeedItem);
