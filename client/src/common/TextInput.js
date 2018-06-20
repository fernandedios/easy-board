import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
    }

    componentWillReceiveProps(nextProps) {
        const { message } = this.props;
        if (nextProps.message !== message) {
            this.setState({ message });
        }
    }

    renderIcon() {
        if (this.state.message !== '') {
            return <span className="icon is-small is-right"><i className="fas fa-exclamation-triangle"></i></span>;
        }
    }

    render() {
        const { name, label, placeholder, ...others } = this.props;

        return (
            <div className="field">
                <label className="label">{label}</label>
                    <div className="control has-icons-right">
                        <input {...others} name={name} className="input" placeholder={placeholder} />
                        {this.renderIcon()}
                    </div>
                <p className="help is-danger">{this.state.message}</p>
            </div>
        );
    }
}

TextInput.defaultProps = {
    message: ''
};

export default TextInput;
