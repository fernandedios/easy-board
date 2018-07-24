import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Login } from '../login/Login';

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
        const output = mount(
            <MemoryRouter><Login /></MemoryRouter>
        );

        expect(output.find('#email').length).toEqual(1);
        expect(output.find('#password').length).toEqual(1);
    });

    it('should render correctly', () => {
        const output = ReactTestRenderer.create(<MemoryRouter><Login /></MemoryRouter>).toJSON();
        expect(output).toMatchSnapshot();
    });
});
