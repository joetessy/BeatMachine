import React from 'react';
import TrackFeedItem from './track_feed_item';
import {withRouter} from 'react-router-dom';

class TrackFeed extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    let path = this.props.location.pathname.slice(1);
    if (path === 'stream'){
      this.props.requestTracks();
    } else if (!this.props.artist) {
      this.props.requestTracks(this.props.match.params.username);
    }
  }
  componentWillReceiveProps(nextProps){
    if (this.props.match.params.username !==
      nextProps.match.params.username){
    this.props.requestArtist(nextProps.match.params.username);
    }
  }

  render(){
    let tracks = null;
    if (this.props.artist){
      tracks = this.props.artist.tracks.map((track) => {
        return <TrackFeedItem track={track} key={track.id}/>;
      });
    } else if (this.props.tracks){
      tracks = this.props.tracks.map((track) => {
        return <TrackFeedItem track={track} key={track.id}/>;
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
