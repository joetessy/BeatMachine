import React from 'react';
import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = (state) => ({
  queue: state.player
});

const mapDispatchToProps = (dispatch) => {

};


export default connect(mapStateToProps, null)(Player);
