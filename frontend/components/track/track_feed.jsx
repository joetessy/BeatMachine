import React from 'react';
import TrackFeedItem from './track_feed_item';

class TrackFeed extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestTracks();
  }

  render(){
    const tracks = this.props.tracks.map((track) => {
      return <TrackFeedItem track={track} key={track.id}/>;
    });

    return(
      <ul>
        {tracks}
      </ul>
    );
  }
}

export default TrackFeed;
