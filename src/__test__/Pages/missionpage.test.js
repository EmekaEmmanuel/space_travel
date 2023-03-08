import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MissionPage from '../../Pages/MissionPage';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <MissionPage />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
