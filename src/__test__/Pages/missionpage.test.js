import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import MissionPage from '../../Pages/MissionPage';

it('Mission page renders correctly', () => {
  const myMissions = store.getState().mission.missions;

  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <MissionPage myMissions={myMissions} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
