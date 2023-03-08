import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MyProfile from '../../components/MyProfile';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <MyProfile />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
