import React from 'react';
import '../css/MyProfile.css';
import { useSelector } from 'react-redux';
// eslint-disable-next-line max-len
import { selectAllmissions } from '../redux/mission/missionSlice';
import { selectAllrocket } from '../redux/rocket/rocketSlice';

function MyProfile() {
  const reservation = useSelector(selectAllmissions);
  const missiondat = reservation.filter((mission) => mission.reserved === true);

  const rock = useSelector(selectAllrocket);
  const rockdat = rock.filter((rocket) => rocket.reserved === true);

  return (
    <section className="tableContainer">
      <div className="missions">
        <h1>My Missions</h1>
        <div className="itemsList">
          {!missiondat.length ? (<li>There are no missions joined.</li>) : null }
          {missiondat && missiondat.map((mission) => (
            <div className="listBox" key={mission.mission_id}>
              <h2 className="listName">
                {mission.mission_name}
              </h2>
            </div>
          ))}
        </div>

      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
        <div className="itemsList">
          {!rockdat.length ? (<li>There are no rocket joined.</li>) : null }
          {rockdat && rockdat.map((rocket) => (
            <div className="listBox" key={rocket.id}>
              <h2 className="listName">
                {rocket.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
