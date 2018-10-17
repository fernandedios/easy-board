import React from 'react';
import { mount } from 'enzyme';
import ReactTestRenderer from 'react-test-renderer';

import TextInput from '../common/TextInput';

describe('<TextInput />', () => {
    let output;
    beforeEach(() => {
        output = mount(<TextInput type="text" name="test" placeholder="test placeholder" />);
    });

    it('should be defined', () => {
        expect(TextInput).toBeDefined();
    });

    it('should have the correct classNames', () => {
        expect(output.find('input').hasClass('input')).toEqual(true);
    });

    it('should render input field correctly', () => {
        expect(output.find('input').prop('placeholder')).toEqual('test placeholder');
        expect(output.find('input').prop('type')).toEqual('text');
    });

    it('should render correctly', () => {
        const render = ReactTestRenderer.create(<TextInput name="test" />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
