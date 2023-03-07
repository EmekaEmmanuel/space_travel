import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import Rocket from '../components/Rocket';
import { fetchRockets } from '../redux/rocket/rocketSlice';

function RocketPage() {
  const myRockets = useSelector((state) => state.rocket.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    (async () => {
      if (active && myRockets.length === 0) {
        dispatch(fetchRockets());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, myRockets]);

  return (
    <div>
      <Nav />
      <Rocket myRockets={myRockets} />
    </div>
  );
}

export default RocketPage;
