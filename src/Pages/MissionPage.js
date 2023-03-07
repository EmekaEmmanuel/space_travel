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
      if (active && myMissions.length === 0) {
        dispatch(fetchMission());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, myMissions]);

  return (
    <div>
      <Nav />
      <Mission myMissions={myMissions} />
    </div>
  );
}

export default MissionPage;
