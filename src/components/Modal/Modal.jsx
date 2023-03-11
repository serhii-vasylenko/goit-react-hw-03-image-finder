import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.habdleEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.habdleEscPress);
  }

  habdleEscPress = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = ({currentTarget, target}) => {
    if (currentTarget === target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.handleBackdropClick} className='Overlay'>
        <div className='Modal'>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
