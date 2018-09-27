import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { name, label, classes, ...others } = this.props;

        return (
            <button {...others} name={name} id={name} className={`button ${classes}`}>{label}</button>
        );
    }
}

Button.defaultProps = {
    classes: ''
};

export default Button;
