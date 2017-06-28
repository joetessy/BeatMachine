import React from 'react';
import TrackButton from './../track/track_button';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionFormContainer from './session_form_container';
import { openModal } from './../../actions/modal_actions';



class HomePageIndexItem extends React.Component {
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
      this.props.openModal(<SessionFormContainer type='signup'/>);
    }

  render(){
    return(
      <li className='home-index-item'>
        <img src={this.props.track.image_url}/>
          <TrackButton
            track={this.props.track}/>
            <div className='home-index-title'
              onClick={this.handleClick}>{this.props.track.title}</div>
            <div className='home-index-artist'
              onClick={this.handleClick}>{this.props.track.artist}</div>
      </li>

      );
  }
}

const mapDispatchToProps = (dispatch) => ({
  openModal: (component) => dispatch(openModal(component))
});

export default connect(null, mapDispatchToProps)(HomePageIndexItem);
