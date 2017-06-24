import React from 'react';
import merge from 'lodash/merge';


class EditTrack extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: this.props.track.title,
      description: this.props.track.description,
      id: this.props.track.id
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

    e.preventDefault();
    const track = merge({}, this.state);
    this.props.updateTrack(track);
    this.props.closeModal();
  }
  render (){
    return(
      <div className='edit-track-form-container'>
        <div className='edit-track-form'>
            <h1>Edit Track</h1>
            <div className='edit-track-form-content'>
            <img src={this.props.track.image_url}></img>
            <div className='labels'>
              <label htmlFor='title'> Title
                <input id='title' type='text'
                  onChange={this.handleChange}
                  value={this.state.title}></input>
              </label>
              <label htmlFor='description'> Description
                <textarea id='description' rows="4" cols="53"
                  onChange={this.handleChange}
                  value={this.state.description}></textarea>
              </label>
            </div>
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