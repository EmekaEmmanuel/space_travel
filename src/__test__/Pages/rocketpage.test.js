import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import RocketPage from '../../Pages/RocketPage';

it('Rocket page renders correctly', () => {
  const myRockets = store.getState().rocket.rockets;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <RocketPage myRockets={myRockets} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
