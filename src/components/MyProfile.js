import React from 'react';
import '../css/MyProfile.css';
import { useSelector } from 'react-redux';

function MyProfile() {
  const myRockets = useSelector((state) => state.rocket.rockets);
  const myMissions = useSelector((state) => state.mission.missions);

  const myProfileRocket = myRockets.filter((rocket) => rocket.reserved === true);
  const myProfileMission = myMissions.filter((mission) => mission.reserved === true);

  return (
    <div className="app_container">
      <section className="myprofile_section">
        <article className="myprofile_article">
          <header className="myprofile_article_header"><h1>My Missions</h1></header>
          {myProfileRocket.map((rocket) => (
            <ul className="myprofile_listbox" key={rocket.id}>
              <li className="myprofile_list_item">{rocket.name}</li>
            </ul>
          ))}
        </article>

        <article className="myprofile_article">
          <header className="myprofile_article_header"><h1>My Rockets</h1></header>
          {myProfileMission.map((mission) => (
            <ul
              className="myprofile_listbox"
              key={mission.mission_id}
            >
              <li className="myprofile_list_item">{mission.mission_name}</li>
            </ul>
          ))}
        </article>
      </section>

    </div>
  );
}

export default MyProfile;
