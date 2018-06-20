import React, { Component } from 'react';
import TextInput from  '../common/TextInput';

class Login extends Component {
    render() {
        return (
            <TextInput name="email" type="email" placeholder="Email Address" />
        );
    }
}

export default Login;
