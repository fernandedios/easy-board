import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import Footer from '../app/Footer';

describe('<Footer />', () => {
    it('should be defined', () => {
        expect(Footer).toBeDefined();
    });
    
    it('should have correct classNames', () => {
        const output = shallow(<Footer />);
        expect(output.find('footer').hasClass('footer')).toEqual(true);
    });

    it('should render footer notice', () => {
        const output = mount(<Footer />);
        expect(output.find('.content').text()).toEqual('© Easy Board. Open Source under MIT License.');
    });

    it('should render correctly', () => {
        const output = ReactTestRenderer.create(<Footer />).toJSON();
        expect(output).toMatchSnapshot();
    });
});
