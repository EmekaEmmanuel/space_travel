import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MyProfilePage from '../../Pages/MyProfilePage';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <MyProfilePage />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
