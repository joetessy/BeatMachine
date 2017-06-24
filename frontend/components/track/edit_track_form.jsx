import React from 'react';
import merge from 'lodash/merge';


class EditTrack extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: this.props.track.title,
      description: this.props.track.description,
      id: this.props.track.id,
      artist_id: this.props.track.artist_id,
      imageUrl: this.props.track.image_url,
      errors: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateImage = this.updateImage.bind(this);
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

  handleSubmit(e){
    if (this.state.title === ''){
      this.setState({errors: 'Please enter a title'});
      return;
    }

    e.preventDefault();
    const track = merge({}, this.state);
    delete track.errors;
    let formData = new FormData();
    formData.append('track[title]', track.title);
    formData.append('track[id]', track.id);
    formData.append('track[description]', track.description);
    formData.append('track[artist_id]', track.artist_id);
    formData.append('track[image]', track.imageFile);
    this.props.updateTrack(formData, track.id);
    this.props.closeModal();
  }
  render (){
      let imageInput = () => {
        return(
        <div className='image-input-button'>
          <i className="fa fa-camera" aria-hidden="true"></i>
          <div className='update-image-text'>Update Image</div>
            <input type='file' onChange={this.updateImage} />
        </div>
      );
    };

    return(
      <div className='edit-track-form-container'>
        <div className='edit-track-form'>
            <h1>Edit Track</h1>
            <div className='edit-track-form-content'>
            <div className='image-container'>
            <img src={this.state.imageUrl} />
              {imageInput()}
            </div>
            <div className='labels'>
              <label htmlFor='title'> Title*
                <input id='title' type='text'
                  onChange={this.handleChange}
                  value={this.state.title}></input>
              </label>
              <label htmlFor='description'> Description
                <textarea id='description' rows="7" cols="53"
                  onChange={this.handleChange}
                  value={this.state.description}></textarea>
              </label>
            </div>
          </div>
          <div className='error-container'>
          <p className='errors'>{this.state.errors}</p>
          </div>
          <div className='buttons'>
            <div className='cancel'
              onClick={this.props.closeModal}>Cancel</div>
            <div className='save-update'
              onClick={this.handleSubmit}>Save Changes</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTrack;
