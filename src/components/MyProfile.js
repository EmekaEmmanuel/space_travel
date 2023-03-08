import React from 'react';
import '../css/MyProfile.css';
import { useSelector } from 'react-redux';
// eslint-disable-next-line max-len
import { selectAllmissions } from '../redux/mission/missionSlice';

function MyProfile() {
  // eslint-disable-next-line max-len
  // const rockets = useSelector((state) => state.rockets.filter((el) => el.rocketReserved === true));
  const reservation = useSelector(selectAllmissions);
  const missiondat = reservation.filter((mission) => mission.reserved === true);
  // const myMissions = useSelector((state) => state.mission.filter((mission) => mission.reserved));

  return (
    // <div className="app_container">MyProfile</div>
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
          {/* {
        (myMissions.length === 0)
          ? (
            <ul className="ul-contain-miss">
              <li>No Missions Joined</li>
            </ul>
          )
          : (
            <ul className="ul-contain-miss">
              {
                myMissions.map((mission) => (
                  <li key={mission.mission_id}>
                    {mission.mission_name}
                  </li>
                ))
              }
            </ul>
          )
      } */}
        </div>

      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
        <div className="itemsList">
          <div className="listBox">
            <h2 className="listName">
              Falcon 1
            </h2>
          </div>
          <div className="listBox">
            <h2 className="listName">
              Starship
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
