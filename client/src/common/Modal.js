import React, { Component } from 'react';
import Button from './Button';

class Modal extends Component {
    render() {
        const { name, content } = this.props;

        return (
            <div id={name} className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">{content}</div>
                <Button classes="modal-close is-large" name="modal-btn" aria-label="close" />
            </div>
        );
    }
}

export default Modal;
