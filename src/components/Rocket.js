import React from 'react';
import '../css/Rocket.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, unreserveRocket } from '../redux/rocket/rocketSlice';

function Rocket(props) {
  const { myRockets } = props;
  const dispatch = useDispatch();

  const handleReserveRocket = (objId) => {
    dispatch(bookRocket(objId));
  };

  const handleUnReserveRocket = (objId) => {
    dispatch(unreserveRocket(objId));
  };

  return (
    <div className="app_container">
      <section className="rocket_section">

        {myRockets.map((myRocket) => (
          <article className="rocket_article" key={myRocket.id}>
            <figure className="rocket_figure">
              <img className="rocket_figure_img" src={myRocket.flickr_images[1]} alt="" />
            </figure>

            <div>
              <header>
                <h3>{myRocket.name}</h3>
              </header>
              {/* eslint-disable max-len  */}
              <div className="rocket_text">
                <p>
                  {myRocket.reserved && <button type="button" className="rocket_btn1">Reserved</button>}
                  {myRocket.description}
                </p>
              </div>
              {/* eslint-disable max-len  */}

              <footer>
                {myRocket.reserved && <button type="button" className="rocket_btn3" onClick={() => { handleUnReserveRocket(myRocket.id); }}>Cancel Reservation</button>}

                {!myRocket.reserved && <button type="button" className="rocket_btn2" onClick={() => { handleReserveRocket(myRocket.id); }}>Reserve Rocket</button>}
              </footer>
            </div>
          </article>
        ))}

      </section>
    </div>
  );
}

Rocket.propTypes = {
  myRockets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.object)).isRequired,
};

export default Rocket;
