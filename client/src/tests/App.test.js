import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ReactTestRenderer from 'react-test-renderer';
import App from '../app/App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<MemoryRouter><App /></MemoryRouter>);
  });
});
