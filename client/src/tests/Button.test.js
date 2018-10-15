import React from 'react';
import { shallow } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import Button from '../common/Button';

describe('<Button />', () => {
    let output;
    beforeEach(() => {
        output = shallow(<Button name="test" classes="other-class" />);
    });

    it('should be defined', () => {
        expect(Button).toBeDefined();
    });

    it('should render the button name correctly', () => {
        expect(typeof(output.prop('name'))).toBe('string');
        expect(output.prop('name'))
    });

    it('should have the correct classNames', () => {
        expect(output.find('button').hasClass('button')).toEqual(true);
        expect(output.find('button').hasClass('other-class')).toEqual(true);
    });

    it('should render correctly', () => {
        const render = ReactTestRenderer.create(<Button label="test" />).toJSON();
        expect(render).toMatchSnapshot();
    });
});