import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import FormValidator from '../utils/FormValidator';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.submitted = false;
        this.validator = new FormValidator([
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Name is required.'
            },
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
            },
            {
                field: 'password',
                method: this.passwordValid,
                validWhen: true,
                message: 'Minimum 6 characters, one number, one lowercase and one uppercase letter'
            },
            {
                field: 'confirm_password',
                method: 'isEmpty',
                validWhen: false,
                message: 'Confirm Password is required'
            },
            {
                field: 'confirm_password',
                method: this.passwordMatch,
                validWhen: true,
                message: 'Passwords do not match'
            }

        ]);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            avatar: '',
            role: '',
            validation: this.validator.valid()
        };

        this.handleEvent = this.handleEvent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    passwordMatch = (confirmation, state) => (state.password === confirmation)
    passwordValid(state) {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(state.password);
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
            const { name, email, avatar, password } = this.state;
            const query = `mutation {
                signup (name: ${name}, email: ${email}, password: ${password}, avatar: ${avatar}, role: "user")
            }`;
            axios.post(`${process.env.REACT_APP_API}/api`, { query })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    render() {
        let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;

        return (
            <section id="signup-box" className="form-box hero">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3">
                            <h3>Signup to Easy Board</h3>
                            <p>Create an account to join</p>
                            <div className="box">
                                <form onSubmit={this.onSubmit}>
                                    <TextInput message={validation.name.message} onChange={this.handleEvent} value={this.state.name} name="name" type="text" placeholder="Your Name" />
                                    <TextInput message={validation.email.message} onChange={this.handleEvent} value={this.state.email} name="email" type="email" placeholder="Email Address" />
                                    <TextInput onChange={this.handleEvent} value={this.state.avatar} name="avatar" type="text" placeholder="Profile Avatar" />
                                    <TextInput message={validation.password.message} onChange={this.handleEvent} value={this.state.password} name="password" type="password" placeholder="Password" />
                                    <TextInput message={validation.confirm_password.message} onChange={this.handleEvent} value={this.state.confirm_password} name="confirm_password" type="password" placeholder="Confirm Password" />
                                    <Button type="submit" name="signup-btn" classes="is-block is-info is-fullwidth" label="Signup" />
                                </form>
                            </div>
                            <p className="has-text-grey">Already have an account? <Link to="/login">Login here</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signup;
