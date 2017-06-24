import React from 'react';

class Player extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  render(){
    let audioPlayer;
    if (this.props.queue){
      audioPlayer =
          <audio controls='controls' autoPlay>
            <source src={this.props.queue} type='audio/ogg' />
            <source src={this.props.queue} type='audio/mpeg'/>
          </audio>;
    }
    return (
      <div className='footer'>
        {audioPlayer}
      </div>
    );
  }
}



export default Player;
