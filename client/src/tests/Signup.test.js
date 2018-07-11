import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import Signup from '../signup/Signup';

describe('<SignupForm />', () => {
    it('should be defined', () => {
        expect(Signup).toBeDefined();
    });

    it('should have correct classNames', () => {
        const output = shallow(<Signup />);
        expect(output.find('section').hasClass('form-box')).toEqual(true);
        expect(output.find('section').hasClass('hero')).toEqual(true);
    });

    it('should render input fields correctly', () => {
        const output = mount(<Signup />);

        expect(output.find('#name').length).toEqual(1);
        expect(output.find('#email').length).toEqual(1);
        expect(output.find('#avatar').length).toEqual(1);
        expect(output.find('#password').length).toEqual(1);
        expect(output.find('#confirm_password').length).toEqual(1);
    });

    it('should render correctly', () => {
        const output = ReactTestRenderer.create(<Signup />).toJSON();
        expect(output).toMatchSnapshot();
    });
});

describe('Name Input Field', () => {
    it('should be a controlled component that responds to state change', () => {
        const output = mount(<Signup />);
        const name = 'Fernan';

        output.find('#name').simulate('change', {
            target: { name: 'name', value: name }
        });

        expect(output.state('name')).toEqual(name);
    });
});

describe('Email Input Field', () => {
    it('should be a controlled component that responds to state change', () => {
        const output = mount(<Signup />);
        const email = 'fernan@test.com';

        output.find('#email').simulate('change', {
            target: { name: 'email', value: email }
        });

        expect(output.state('email')).toEqual(email);
    });
});

describe('Password Input Field', () => {
    it('should be a controlled component that responds to state change', () => {
        const output = mount(<Signup />);
        const pass = 'pass123';

        output.find('#password').simulate('change', {
            target: { name: 'password', value: pass }
        });

        expect(output.state('password')).toEqual(pass);
    });
});

describe('Confirm Password Input Field', () => {
    it('should be a controlled component that responds to state change', () => {
        const output = mount(<Signup />);
        const pass = 'pass123';

        output.find('#confirm_password').simulate('change', {
            target: { name: 'confirm_password', value: pass }
        });

        expect(output.state('confirm_password')).toEqual(pass);
    });
});
