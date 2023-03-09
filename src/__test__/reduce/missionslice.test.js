import axios from 'axios';
import store from '../../redux/store';
import { fetchMission, joinMission, leaveMission } from '../../redux/mission/missionSlice';

describe('Mission redux state tests', () => {
  it('Should initially set Mission store to an empty Array', () => {
    const state = store.getState().mission.missions;
    expect(state).toEqual([]);
  });

  it('should Join Mission payload send correct', () => {
    const expectedPayload = { payload: '9D1B7E0', type: 'mission/joinMission' };
    const actualPayload = joinMission('9D1B7E0');
    expect(actualPayload).toEqual(expectedPayload);
  });

  it('should Leave Mission payload send correct', () => {
    const expectedPayload = { payload: '9D1B7E0', type: 'mission/leaveMission' };
    const actualPayload = leaveMission('9D1B7E0');
    expect(actualPayload).toEqual(expectedPayload);
  });

  it('fetches data from API', async () => {
    const url = 'https://api.spacexdata.com/v3/missions';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();
    await fetchMission(url)(dispatchSpy);
    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});
