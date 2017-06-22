import React from 'react';
import NavBarContainer from '../navbar/navbar_container.jsx';

class UploadTrackForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      imageFile: null,
      imageUrl: null,
      audioFile: null,
      audioUrl: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
  }

  handleChange(e){
    this.setState({ [e.currentTarget.id]: e.currentTarget.value});
  }

  updateImage(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);
    if (file){
      fileReader.readAsDataURL(file);
    }
  }

  updateAudio(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({audioFile: file, audioUrl: fileReader.result});
    }.bind(this);
    if (file){
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){

  }
  render(){
    return(
      <div>
        <NavBarContainer/>
          <div className='upload-track-form'>
            <div className='form-container'>
              <form>
                <h1>Upload To BeatMachine</h1>
                <label htmlFor='title'> Title
                  <input id='title' type='text'
                    onChange={this.handleChange}
                    value={this.state.title}></input>
                </label>
                <label htmlFor='description'> Description
                  <input id='description' type='text'
                    onChange={this.handleChange}
                    value={this.state.description}></input>
                </label>
                <label className='a'
    							htmlFor='image'>Choose Track Image
    							<input type='file' onChange={this.updateImage}/>
    						</label>
                <label className='b'
    							htmlFor='audio'>Choose Track
    							<input type='file' onChange={this.updateAudio}/>
    						</label>
                <input type='submit' value='Upload Track'/>
              </form>
            </div>
          </div>
      </div>

    );
  }
}

export default UploadTrackForm;
