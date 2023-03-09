import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import '../css/Mission.css';
import { joinMission, leaveMission } from '../redux/mission/missionSlice';

function Mission(props) {
  const { myMissions } = props;
  const dispatch = useDispatch();

  const handleJoinMission = (objId) => {
    dispatch(joinMission(objId));
  };

  const handleLeaveMission = (objId) => {
    dispatch(leaveMission(objId));
  };

  return (
    <div className="app_container">
      <section className="mission_section">
        <table>
          <thead>
            <tr className="table_row_head">
              <td className="table_head_tag tht10">Mission</td>

              <td className="table_head_tag tht70">Description</td>

              <td className="table_head_tag tht10">Status</td>

              <td className="table_head_tag tht10" />
            </tr>
          </thead>
          {/* eslint-disable max-len  */}
          <tbody>
            {myMissions.map((myMission) => (
              <tr key={myMission.mission_id}>
                <td className="mission_font1 table_data_tag tdt10 mission_td_bold1">
                  <p>{myMission.mission_name}</p>
                </td>
                <td className="mission_font1 tdt70">
                  <p className="mission_padd1">
                    {' '}
                    {myMission.description}
                  </p>
                </td>

                <td className="mission_font1 tdt10">
                  {myMission.reserved && (
                  <button type="button" className="mission_btn3">
                    Active Member
                  </button>
                  )}

                  {!myMission.reserved && (
                  <button type="button" className="mission_btn1">
                    NOT A MEMBER
                  </button>
                  )}

                </td>

                <td className=" tdt10">
                  {myMission.reserved && (
                  <button type="button" className="mission_font1 mission_btn4" onClick={() => { handleLeaveMission(myMission.mission_id); }}>
                    Leave Mission
                  </button>
                  )}

                  {!myMission.reserved && (
                  <button type="button" className="mission_font1 mission_btn2" onClick={() => { handleJoinMission(myMission.mission_id); }}>
                    Join Mission
                  </button>
                  )}

                </td>
              </tr>
            ))}
          </tbody>
          {/* eslint-disable max-len  */}
        </table>
      </section>
    </div>
  );
}

Mission.propTypes = {
  myMissions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.object)).isRequired,
};

export default Mission;
