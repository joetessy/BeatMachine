import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBarContainer from './../navbar/navbar_container';
import ArtistTrackStreamContainer
  from './../track/artist_track_stream_container';


class ArtistPage extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <NavBarContainer />
        <div className='login-home-container'>
          <div className='profile-header'>

          </div>
          <div className='TrackFeed'>
            <ArtistTrackStreamContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistPage;
