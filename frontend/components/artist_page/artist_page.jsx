import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import NavBarContainer from './../navbar/navbar_container';
import TrackFeed from './../track/track_feed';


class ArtistPage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.requestArtist(this.props.match.params.username);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.username !==
      nextProps.match.params.username){
    this.props.requestArtist(nextProps.match.params.username);
    }
  }

  render(){
    if (!this.props.artist) {
      return null;
    }
    let image = <img src={this.props.artist.image_url}/>;
    return (
      <div>
        <NavBarContainer />
          <div className='push-below-navbar'>

        <div className='login-home-container'>
          <div className='profile-header'>
            <div className='profile-header-content'>
            {image}
            <div className='artist-metadata'>
              <div className='artist-name'>
                {this.props.artist.username}
              </div>
              <div className='artist-location'>
                <p>{this.props.artist.location}</p>
              </div>
            </div>
          </div>
          </div>
          <div className='home-header'>

          <NavLink to={`/${this.props.artist.username}`}>
            <h2 className='artist-all'>All</h2></NavLink>
          </div>
          <div className='TrackFeed'>
            <TrackFeed artist={this.props.artist}
              currentUser={this.props.currentUser}/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ArtistPage;
