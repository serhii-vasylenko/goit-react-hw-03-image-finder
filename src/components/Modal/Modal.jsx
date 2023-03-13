import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
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
    const {item: {largeImageURL, tags}} = this.props;
    return createPortal(
      <div onClick={this.handleBackdropClick} className='Overlay'>
        <img src={largeImageURL} alt={tags} width='800'/>
      </div>,
      modalRoot
    );
  }
}
