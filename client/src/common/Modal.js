import React, { Component } from 'react';
import Button from './Button';

class Modal extends Component {
    render() {
        const { name, title, content } = this.props;

        return (
            <div id={name} className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{title}</p>
                        <Button classes="delete" aria-label="close" />
                    </header>
                    <section class="modal-card-body">
                        {content}
                    </section>
                    <footer className="modal-card-foot">
                        <Button classes="is-success" name="modal-btn" label="Save" />
                        <Button name="modal-btn" label="Cancel" />
                    </footer>
                </div>
                <Button classes="modal-close is-large" name="modal-btn" aria-label="close" />
            </div>
        );
    }
}

export default Modal;
