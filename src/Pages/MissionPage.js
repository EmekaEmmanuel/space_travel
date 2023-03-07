import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import Mission from '../components/Mission';
import { fetchMission } from '../redux/mission/missionSlice';

function MissionPage() {
  const myMissions = useSelector((state) => state.mission.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    (async () => {
      if (active) {
        dispatch(fetchMission());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Mission myMissions={myMissions} />
    </div>
  );
}

export default MissionPage;
