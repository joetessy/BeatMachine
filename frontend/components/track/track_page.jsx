import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import NavBarContainer from './../navbar/navbar_container';
import { requestTrack } from './../../actions/track_actions';
import { withRouter } from 'react-router-dom';
import { requestComments } from './../../actions/comment_actions';
import { selectSingleTrack } from './../../reducers/selectors';
import TrackButton from './track_button';
import CommentsIndex from './../comments/comments_index';
import CommentForm from './../comments/comment_form';

class TrackPage extends React.Component{
  constructor(props){
    super(props);
    this.state = { track: null };
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.requestTrack(this.props.match.params.title);
    this.setState({track: this.props.track});
  }

  componentWillReceiveProps(nextProps){
    this.setState({track: nextProps.track});
  }

  render(){
    let title = null;
    let artist = null;
    let description = null;
    let image = null;
    let track = null;
    let trackButton = null;
    let artistImage = null;
    let commentsIndex = null;
    let timeAgo = null;
    let commentCount = null;
    if (this.props.track){
      title = this.props.track.title;
      artist = this.props.track.artist;
      description = this.props.track.description;
      image = this.props.track.image_url;
      artistImage = this.props.track.artist_image;
      track = this.props.track;
      trackButton = <TrackButton track={track}/>;
      commentsIndex = <CommentsIndex track={track}/>;
      commentCount = this.props.track.comments.length;
      timeAgo = this.props.track.time_ago;
    }
    return (
      <div>
        <NavBarContainer />
        <div className='push-below-navbar'>
        <div className='login-home-container'>
          <div className='track-show-header'>
              <div className='left-of-pic'>
              <div className='track-show-header-content'>
                <div className='play-and-info'>
                <div className='track-show-button'>
                  {trackButton}
                </div>
                <div className='artist-metadata'>
                  <div className='track-artist-name'>
                    <NavLink to={`/${artist}`}>
                      {artist}
                    </NavLink>
                  </div>
                <div className='track-name'>
                  {title}
                </div>
                </div>
              </div>
              <div className='track-show-time-ago'>
                {timeAgo}
              </div>
            </div>
            <div className='show-track-waveform'>
              <img src={window.images.showwave}/>
            </div>
            </div>
              <div className='track-image'>
                <img src={image}/>
              </div>
          </div>
        </div>
        <div className='track-show-container'>
            <CommentForm track={track}/>
        <div className='track-show-content'>
            <NavLink to={`/${artist}`}>

          <div className='artist-pic'>
            <img src={artistImage}/>
            {artist}
          </div>
        </NavLink>
            <div className='description-comment-container'>
              <div className='track-show-description'>
                <p>{description}</p>
              </div>
              <div className='comment-list'>
                {commentsIndex}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
  currentUser: state.session.currentUser,
  track: state.tracks[state.tracks.showTrack]
  });
};

const matchDispatchToProps = (dispatch) => ({
  requestTrack: (title) => dispatch(requestTrack(title))
});

export default
  withRouter(connect(mapStateToProps, matchDispatchToProps)(TrackPage));
