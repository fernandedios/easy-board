import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import { Header } from '../app/Header';

describe('<Header />', () => {
    it('should be defined', () => {
        expect(Header).toBeDefined();
    });
    
    it('should have correct classNames', () => {
        const output = shallow(<Header />);
        expect(output.find('nav').hasClass('navbar')).toEqual(true);
    });

    it('should render menu', () => {
        const output = mount(<Header />);
        expect(output.find('.navbar-end').children()).toHaveLength(4);
    });

    it('should render correctly', () => {
        const output = ReactTestRenderer.create(<Header />).toJSON();
        expect(output).toMatchSnapshot();
    });
});
