import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Mission from '../../components/Mission';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Mission />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
