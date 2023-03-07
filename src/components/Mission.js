import React from 'react';
import { PropTypes } from 'prop-types';
import '../css/Mission.css';

function Mission(props) {
  const { myMissions } = props;
  // console.log(myMissions);

  const handleJoinMission = (objId) => {
    console.log(objId);
    // dispatch(deleteBook(objId));
    // dispatch(deleteBooks(objId));
    // setTimeout(() => {
    //   dispatch(fetchBooks());
    // }, 500);
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
                <td className="mission_font1 table_data_tag tdt10">
                  <p>{myMission.mission_name}</p>
                </td>
                <td className="mission_font1 tdt70">
                  <p className="mission_padd1">
                    {' '}
                    {myMission.description}
                  </p>
                </td>

                <td className="mission_font1 tdt10">
                  <button type="button" className="mission_btn1">
                    NOT A MEMBER
                  </button>
                </td>

                <td className=" tdt10">
                  <button type="button" className="mission_font1 mission_btn2" onClick={() => { handleJoinMission(myMission.mission_id); }}>
                    Join Mission
                  </button>
                </td>
              </tr>
            ))}

            {/* <tr>
              <td className="mission_font1 table_data_tag tdt10">
                <p>Tjiacom</p>
              </td>
              <td className="mission_font1 tdt70">
                <p className="mission_padd1">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  commodi deleniti sint odit
                  quo ea tempora id quam, autem exercitationem dolorum illum nam debitis hic! Maiores ipsa
                  error voluptatibus nostrum ea soluta, exercitationem hic accusamus similique molestiae
                  delectus iusto, expedita cumque mollitia ex illum ullam. Consequuntur alias excepturi
                  esse corporis?
                </p>
              </td>

              <td className="mission_font1 tdt10">
                <button type="button" className="mission_btn3">
                  Active Member
                </button>
              </td>

              <td className=" tdt10">
                <button type="button" className="mission_font1 mission_btn4">
                  Leave Mission
                </button>
              </td>
            </tr> */}

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
