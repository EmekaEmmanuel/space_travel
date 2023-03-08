import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Rocket from '../../components/Rocket';

it('Rocket component renders correctly', () => {
  const myRockets = store.getState().rocket.rockets;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Rocket myRockets={myRockets} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
