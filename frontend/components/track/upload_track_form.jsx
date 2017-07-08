import React from 'react';
import NavBarContainer from '../navbar/navbar_container.jsx';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import omit from 'lodash/omit';


class UploadTrackForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      imageFile: '',
      imageUrl: '',
      audioFile: '',
      audioUrl: '',
      willRedirect: false,
      errors: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    e.preventDefault();

    if (this.state.title === ''){
      this.setState({errors: 'Please enter a title'});
      return;
    } else if (this.state.audioUrl === ''){
      this.setState({errors: 'Please upload a track'});
      return;
    }


    const track = Object.assign({}, this.state);
    delete track.willRedirect;
    let formData = new FormData();
    formData.append('track[title]', track.title);
    formData.append('track[description]', track.description);
    formData.append('track[artist_id]', this.props.currentUser.id);
    formData.append('track[image]', track.imageFile);
    formData.append('track[audio]', track.audioFile);
    this.props.createTrack(formData).then(() => {
      this.setState({title: '', description: '', willRedirect: true});
    });
  }



  render(){
    if (this.state.willRedirect === true){
      return <Redirect to={`/${this.props.currentUser.username}`} />;
    }
    let errors = (this.props.errors.length > 0) ?
      this.props.errors.join(", ") : null;
    let imageInput = () => {
      return(
      <div className='image-input-button'>
        <i className="fa fa-camera" aria-hidden="true"></i>
        <div className='update-image-text'>Choose Track Image</div>
          <input type='file' onChange={this.updateImage} />
      </div>);
    };
    return(
      <div>
        <NavBarContainer/>
        <div className='push-below-navbar'>
          <div className='upload-track-form'>
            <div className='form-container'>
              <div className='form-content'>

                <h1>Upload To BeatMachine</h1>

              <form onSubmit={this.handleSubmit}>
                <div className='upload-container'>
                  <div className='image-container'>
                    <img src={ this.state.imageUrl ?
                        this.state.imageUrl : null} />
                      {imageInput()}
                  </div>

                  <div className='upload-form-content'>
                    <label className='audio-upload'
                      htmlFor='audio'>Choose a file to upload
                      <input type='file' onChange={this.updateAudio}/>
                    </label>
                    <label htmlFor='title'> Title * <br/>
                      <input id='title' type='text'
                        onChange={this.handleChange}
                        value={this.state.title}></input>
                    </label>
                    <label htmlFor='description'> Description <br/>
                      <textarea id='description' rows="4" cols="53"
                        onChange={this.handleChange}
                        value={this.state.description}></textarea>
                    </label>
                  </div>
                </div>
                <div className='upload-submit'>
                  <input type='submit' value='Upload Track'/>
                </div>
              </form>
              <div className='error-container'>
              <p className='errors'>{this.state.errors}</p>
              </div>
              </div>
            </div>
          </div>
          </div>
      </div>

    );
  }
}

export default withRouter(UploadTrackForm);
