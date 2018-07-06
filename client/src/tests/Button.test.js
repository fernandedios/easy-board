import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import Button from '../common/Button';

describe('<Button />', () => {
    it('should be defined', () => {
        expect(Button).toBeDefined();
    });

    it('should render the button name correctly', () => {
        const output = shallow(<Button name="test" />);
        expect(typeof(output.prop('name'))).toBe('string');
        expect(output.prop('name'))
    });

    it('should have the correct classNames', () => {
        const output = shallow(<Button classes="other-class" />);
        expect(output.find('button').hasClass('button')).toEqual(true);
        expect(output.find('button').hasClass('other-class')).toEqual(true);
    });

    it('should render correctly', () => {
        const output = ReactTestRenderer.create(<Button label="test" />).toJSON();
        expect(output).toMatchSnapshot();
    });
});