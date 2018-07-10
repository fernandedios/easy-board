import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import Login from '../login/Login';

describe('<LoginForm />', () => {
    it('should be defined', () => {
        expect(Login).toBeDefined();
    });

    it('should have correct classNames', () => {
        const output = shallow(<Login />);
        expect(output.find('section').hasClass('form-box')).toEqual(true);
        expect(output.find('section').hasClass('hero')).toEqual(true);
    });

    it('should render input fields correctly', () => {
        const output = mount(<Login />);

        expect(output.find('#email').length).toEqual(1);
        expect(output.find('#password').length).toEqual(1);
    });

    it('should render correctly', () => {
        const output = ReactTestRenderer.create(<Login />).toJSON();
        expect(output).toMatchSnapshot();
    });
});

describe('Email Input Field', () => {
    it('should be a controlled component that responds to state change', () => {
        const output = mount(<Login />);
        const email = 'fernan@test.com';

        output.find('#email').simulate('change', {
            target: { name: 'email', value: email }
        });

        expect(output.state('email')).toEqual(email);
    });
});

describe('Password Input Field', () => {
    it('should be a controlled component that responds to state change', () => {
        const output = mount(<Login />);
        const pass = 'pass123';

        output.find('#password').simulate('change', {
            target: { name: 'password', value: pass }
        });

        expect(output.state('password')).toEqual(pass);
    });
});
