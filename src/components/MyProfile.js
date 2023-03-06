import React from 'react';
import '../css/MyProfile.css';

function MyProfile() {
  return (
    // <div className="app_container">MyProfile</div>
    <section className="tableContainer">
      <div className="missions">
        <h1>My Missions</h1>
        <div className="itemsList">
          <div className="listBox">
            <h2 className="listName">
              Thaicom
            </h2>
          </div>
          <div className="listBox">
            <h2 className="listName">
              SES
            </h2>
          </div>
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
