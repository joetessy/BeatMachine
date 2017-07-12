import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import DeleteTrackContainer from './delete_track_container';
import EditTrackContainer from './edit_track_form_container';
import TrackButton from './track_button';

class TrackFeedItem extends React.Component{
  constructor(props){
    super(props);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite(){
    if (this.props.currentUser.favorite_tracks.includes(this.props.track.id)){
      this.props.deleteFavorite(this.props.track.id);
    } else {
    this.props.createFavorite(
      { user_id: this.props.currentUser.id,
        track_id: this.props.track.id});
    }
  }

  componentDidMount(){
    const wavesurfer = WaveSurfer.create({
        container: '#wave-' + this.props.track.id,
        waveColor: '#8c8c8c',
        progressColor: '#ff5000',
        height: 50,
        backend: 'MediaElement',
        barWidth: 2,
        cursorColor: 'transparent'

    });

    wavesurfer.load(this.props.track.audio_url);
    const audio = $('audio')[0];
    wavesurfer.on("seek", (progress) => {
      if(audio.src === this.props.track.audio_url) {
        audio.currentTime = progress * audio.duration;
      }
    });
  }

  render(){
    debugger;
    let trackMenu = null;
    if (this.props.track.artist_id === this.props.currentUser.id &&
      this.props.location.pathname.slice(1) === this.props.track.artist)
      {
      trackMenu =
      <div className='dropdown'>
        <div className='options'>
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            <div className='dropdown-content'>
              <ul>
                <li onClick={()=> (this.props.openModal(<EditTrackContainer
                  track={this.props.track}/>))}>
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                    Edit
                </li>
                <li onClick={()=> (this.props.openModal(<DeleteTrackContainer
                    track={this.props.track}/>))}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                    Delete
                </li>
              </ul>
            </div>
          </div>
        </div>;
    }
    let header = null;
    if (this.props.location.pathname === '/stream'){
      header = (

        <div className='track-index-item-header'>
          <NavLink to={`/${this.props.track.artist}`}>
            <img className='track-index-item-header-pic'
            src={this.props.track.artist_image}/></NavLink>
          <NavLink to={`/${this.props.track.artist}`}>
          {this.props.track.artist}</NavLink>
          has posted a
          <NavLink
            to={`/${this.props.track.artist}/${this.props.track.title}`}>track
          </NavLink> {this.props.track.time_ago} ago
        </div>
      );
    }
    let likeClass = null;
    let countClass = null;
    if (this.props.currentUser.favorite_tracks.includes(this.props.track.id)){
      likeClass = 'liked-button';
      countClass = 'liked-count';
    } else {
      likeClass = 'like-button';
      countClass = 'like-count';
    }
    let trackCount = null;
    if (this.props.track.favorited_users.length >= 1){
      trackCount = <div className={countClass}>
          {`  ${this.props.track.favorited_users.length}`}</div>;
    }

    return (
      <div className='track-feed-item'>
      {header}
      <div className='track-body'>
        <img className='track-image'src={this.props.track.image_url} />
        <div className='track-content'>
          <div className='track-header'>
            <TrackButton
              track={this.props.track}/>
            <div className='track-metadata'>
              <div className='track-artist'>
                <NavLink
                  to={`/${this.props.track.artist}`}>
                {this.props.track.artist}
              </NavLink>
              </div>
              <div className='track-title'>
              <Link
                to={`/${this.props.track.artist}/${this.props.track.title}`}>
                {this.props.track.title}
              </Link>
              </div>
            </div>
          </div>
          <div className="track-waveform" id={"wave-" + this.props.track.id}></div>
            <div className='options-bar'>
              <div className={likeClass}
                onClick={()=>this.handleFavorite()}>
                <i className="fa fa-heart" aria-hidden="true"></i>
                {trackCount}
              </div>
              {trackMenu}
            </div>
        </div>
      </div>
      </div>
    );
  }
}


export default withRouter(TrackFeedItem);
