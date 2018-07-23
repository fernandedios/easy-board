import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './LoginActions';
import FormValidator from '../utils/FormValidator';
import TextInput from  '../common/TextInput';
import Button from '../common/Button';

class Login extends Component {
    constructor(props) {
        super(props);

        this.submitted = false;
        this.validator = new FormValidator([
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Email address is required.'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'Please provide a valid email address'
            },
            {
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'Password is required'
            }
        ]);

        this.state = {
            email: '',
            password: '',
            validation: this.validator.valid()
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

        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        if (validation.isValid) {
            const { email, password } = this.state;
            this.props.doLogin({ email, password });
        }
    }

    render() {
        let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;

        return (
            <section id="login-box" className="form-box hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3">
                            <h3>Login</h3>
                            <p>Kindly login to continue.</p>
                            <div className="box">
                                <form onSubmit={this.onSubmit}>
                                    <TextInput message={validation.email.message} onChange={this.handleEvent} value={this.state.email} name="email" type="email" placeholder="Email Address" />
                                    <TextInput message={validation.password.message} onChange={this.handleEvent} value={this.state.password} name="password" type="password" placeholder="Password" />
                                    <Button type="submit" name="login-btn" classes="is-block is-info is-fullwidth" label="Login" />
                                </form>
                            </div>
                            <p className="has-text-grey">Don't have account? <Link to="/signup">Sign up here</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth }
};

export default connect(mapStateToProps, actions)(Login);
