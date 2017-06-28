import React from 'react';
import TrackButton from './../track/track_button';
import { NavLink } from 'react-router-dom';

class HomePageIndexItem extends React.Component {
    constructor(props){
      super(props);
    }

  render(){
    return(
      <li className='home-index-item'>
        <img src={this.props.track.image_url}/>
          <TrackButton
            track={this.props.track}/>
          <NavLink to={`/${this.props.track.artist}/${this.props.track.title}`}>
            <div className='home-index-title'>{this.props.track.title}</div>
          </NavLink>
          <NavLink to={`/${this.props.track.artist}`}>
            <div className='home-index-artist'>{this.props.track.artist}</div>
          </NavLink>
      </li>

      );
  }
}
export default HomePageIndexItem;
