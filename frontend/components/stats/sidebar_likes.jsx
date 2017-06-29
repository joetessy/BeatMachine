import React from 'react';
import { connect } from 'react-redux';

class SidebarLikes extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>HI!</div>
    );
  }
}

const mapStateToProps = ({currentUser, artist}) => ({
  currentUser,
  artist
});

export default SidebarLikes;
