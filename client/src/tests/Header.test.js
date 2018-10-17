import React from 'react';
import { mount } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import { Header } from '../app/Header';

describe('<Header />', () => {
    let output;
    beforeEach(() => {
        output = mount(<Header />);
    });

    it('should be defined', () => {
        expect(Header).toBeDefined();
    });
    
    it('should have correct classNames', () => {
        expect(output.find('nav').hasClass('navbar')).toEqual(true);
    });

    it('should render menu', () => {
        expect(output.find('.navbar-end').children()).toHaveLength(4);
    });

    it('should render correctly', () => {
        const render = ReactTestRenderer.create(<Header />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
