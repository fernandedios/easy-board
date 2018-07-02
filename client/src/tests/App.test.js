import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../app/App';

it('renders without crashing', () => {
  shallow(<App />);
});
