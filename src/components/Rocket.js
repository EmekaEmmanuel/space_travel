import React from 'react';
import '../css/Rocket.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import userImg from '../img/user.jpg';
import { reserveRocket } from '../redux/rocket/rocketSlice';

function Rocket(props) {
  const { myRockets } = props;
  // console.log(myRockets);
  const dispatch = useDispatch();

  const handleReserveRocket = (objId) => {
    console.log(objId);
    dispatch(reserveRocket(objId));
    console.log(myRockets);

    // dispatch(deleteBook(objId));
    // dispatch(deleteBooks(objId));
    // setTimeout(() => {
    //   dispatch(fetchBooks());
    // }, 500);
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
                  {myRocket.description}
                </p>
              </div>
              {/* eslint-disable max-len  */}

              <footer>
                <button type="button" className="rocket_btn2" onClick={() => { handleReserveRocket(myRocket.id); }}>Reserve Rocket</button>
              </footer>
            </div>
          </article>
        ))}

        <article className="rocket_article">
          <figure className="rocket_figure">
            <img className="rocket_figure_img" src={userImg} alt="" />
          </figure>

          <div>
            <header>
              <h3>Falcon 1</h3>
            </header>

            {/* eslint-disable max-len  */}
            <div className="rocket_text">
              <p>
                {' '}
                <button type="button" className="rocket_btn1">Reserved</button>
                {' '}
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur asperiores, quibusdam
                voluptatem in dignissimos natus autem, ducimus perferendis deleniti, veniam magni ipsa rem
                nesciunt totam alias ex. Cum nesciunt deserunt asperiores? Doloribus illum voluptas modi
                quaerat
                iure officia quibusdam. Inventore libero corporis beatae animi, corrupti optio cum
                accusantium
                distinctio possimus?
              </p>
            </div>
            {/* eslint-disable max-len  */}
            <footer>
              <button type="button" className="rocket_btn3">Cancel Reservation</button>
            </footer>

          </div>
        </article>

      </section>
    </div>
  );
}

Rocket.propTypes = {
  myRockets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.object)).isRequired,
};

export default Rocket;
