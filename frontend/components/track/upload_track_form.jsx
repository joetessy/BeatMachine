import React from 'react';
import NavBarContainer from '../navbar/navbar_container.jsx';

class UploadTrackForm extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    debugger;
    return(
      <div>
        <NavBarContainer/>
          <div className='upload-track-form'>
            <div className='form-container'>
              <form>
                <h1>Upload To BeatMachine</h1>

              </form>
            </div>
          </div>
      </div>

    );
  }
}

export default UploadTrackForm;
