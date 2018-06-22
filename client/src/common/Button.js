import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { name, label, classes, ...others } = this.props;

        return (
            <button {...others} name={name} id={name} class={`button ${classes}`}>Login</button>
        );
    }
}

Button.defaultProps = {
    classes: ''
};

export default Button;
