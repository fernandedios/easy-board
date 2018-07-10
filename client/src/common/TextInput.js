import React, { Component } from 'react';

class TextInput extends Component {
    renderIcon() {
        if (this.props.message !== '') {
            return <span className="icon is-small is-right"><i className="fas fa-exclamation-triangle"></i></span>;
        }
    }

    render() {
        const { name, label, message, placeholder, ...others } = this.props;

        return (
            <div className="field">
                <label className="label">{label}</label>
                    <div className="control has-icons-right">
                        <input {...others} id={name} name={name} className="input" placeholder={placeholder} />
                        {this.renderIcon()}
                    </div>
                <p className="help is-danger">{message}</p>
            </div>
        );
    }
}

TextInput.defaultProps = {
    message: ''
};

export default TextInput;
