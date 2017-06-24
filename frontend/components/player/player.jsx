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
          <audio controls='controls'
            autoPlay
            ref={(arg) => (this.music = arg)}>
            <source src={this.props.queue[0]} type='audio/ogg' />
            <source src={this.props.queue[0]} type='audio/mpeg'/>
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
