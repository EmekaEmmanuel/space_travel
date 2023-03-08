import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Rocket from '../../components/Rocket';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Rocket />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
