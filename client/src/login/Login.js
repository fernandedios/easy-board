import React, { Component } from 'react';
import TextInput from  '../common/TextInput';
import Button from '../common/Button';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleEvent = this.handleEvent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleEvent(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;
    }

    render() {
        return (
            <section id="login-box" className="hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3">
                            <h3>Login</h3>
                            <p>Kindly login to continue.</p>
                            <div className="box">
                                <form onSubmit={this.onSubmit}>
                                    <TextInput onChange={this.handleEvent} value={this.state.email} name="email" type="email" placeholder="Email Address" />
                                    <TextInput onChange={this.handleEvent} value={this.state.password} name="password" type="password" placeholder="Password" />
                                    <Button type="submit" name="login-btn" classes="is-block is-info is-fullwidth" label="Login" />
                                </form>
                            </div>
                            <p className="has-text-grey">Don't have account? <a href="/signup">Sign up here</a></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;
