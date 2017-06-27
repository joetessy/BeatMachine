import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div className='modal-root-container'>
            <div className={
                this.props.isOpen ?
                  'modal-content-pre modal-content-post' : 'modal-content-pre'
                }>
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
