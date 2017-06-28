import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div className='modal-root-container'>
          <div className='modal-root' 
            onClick={() => this.props.closeModal()}>
          </div>
            <div className='modal-content-post'>
              {this.props.component}
            </div>
        </div>
      );
    } else {
      return (
        <div className="modal-not-active"></div>
      );
    }
  }
}

export default Modal;
