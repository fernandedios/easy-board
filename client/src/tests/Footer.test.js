import React from 'react';
import { mount } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import Footer from '../app/Footer';

describe('<Footer />', () => {
    let output;
    beforeEach(() => {
        output = mount(<Footer />);
    });

    it('should be defined', () => {
        expect(Footer).toBeDefined();
    });
    
    it('should have correct classNames', () => {
        expect(output.find('footer').hasClass('footer')).toEqual(true);
    });

    it('should render footer notice', () => {
        expect(output.find('.content').text()).toEqual('© Easy Board. Open Source under MIT License.');
    });

    it('should render correctly', () => {
        const render = ReactTestRenderer.create(<Footer />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
