import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../app/App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders a header component', () => {
  const output = mount(<App />);
  expect(output.find('nav.navbar').length).toEqual(1);
});

it('renders a footer component', () => {
  const output = mount(<App />);
  expect(output.find('footer.footer').length).toEqual(1);
});
