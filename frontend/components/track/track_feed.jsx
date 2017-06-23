import React from 'react';
import TrackFeedItem from './track_feed_item';
import {withRouter} from 'react-router-dom';
import { selectArtistTracks } from './../../reducers/selectors.js';

class TrackFeed extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    let path = this.props.location.pathname.slice(1);
    if (path === 'stream'){
      this.props.requestTracks();
    }
  }

  render(){
    let tracks = null;
    if (this.props.artist){
      tracks = selectArtistTracks(this.props.artist).map((track) => {
        return <TrackFeedItem track={track}
          key={track.id}
          currentUser={this.props.currentUser}/>;
      });
    } else if (this.props.tracks){
      tracks = this.props.tracks.map((track) => {
        return <TrackFeedItem track={track}
          currentUser={this.props.currentUser}
          key={track.id}/>;
      });
    }
    return(
      <ul>
        {tracks}
      </ul>
    );
  }
}

export default withRouter(TrackFeed);
