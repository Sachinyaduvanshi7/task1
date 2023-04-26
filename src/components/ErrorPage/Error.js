import React from 'react';
import './Error.scss';
import { Link } from 'react-router-dom';
import ErrorPage from '../../images/ErrorPage_Img.png';

function Error() {
  return (
    <React.Fragment>
      <div className="ErrorPage__Div">
        <img src={ErrorPage} />
        <div className="ErrorPage__ContentBox">
          <h2>Oops!</h2>
          <p>Something went wrong here.</p>
          <p>We're working on it and we'll get it fixed as soon as we can.</p>
          <Link className="ErrorPage__ContentBoxBtn" to="/home">
            Back To Homepage
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Error;
