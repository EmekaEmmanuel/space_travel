import axios from 'axios';
import store from '../../redux/store';
import { bookRocket, unreserveRocket, fetchRockets } from '../../redux/rocket/rocketSlice';

describe('Rocket redux state tests', () => {
  it('Should initially set Rocket store to an empty Array', () => {
    const state = store.getState().rocket.rockets;
    expect(state).toEqual([]);
  });

  it('should Book Rocket payload send correct', () => {
    const expectedPayload = { payload: '9D1B7E0', type: 'rocket/bookRocket' };
    const actualPayload = bookRocket('9D1B7E0');
    expect(actualPayload).toEqual(expectedPayload);
  });

  it('should unreserve Rocket payload send correct', () => {
    const expectedPayload = { payload: '9D1B7E0', type: 'rocket/unreserveRocket' };
    const actualPayload = unreserveRocket('9D1B7E0');
    expect(actualPayload).toEqual(expectedPayload);
  });

  it('fetches data from API', async () => {
    const url = 'https://api.spacexdata.com/v4/rockets';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();
    await fetchRockets(url)(dispatchSpy);
    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});
