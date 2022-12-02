// import React from 'react';

// import { useQuery } from '@apollo/client';

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>C.A.A News</h1>
      </div>
      <div className="card-body m-5">
        <h2>Get you latest news from a reliable source</h2>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Want to read more?</h2>
        <Link to="/SignUp">
          <button className="btn btn-lg btn-danger">Sign Up!</button>
        </Link>
        <h2>Already signed up? Click here to login!</h2>
        <Link to="/Login">
          <button className="btn btn-lg btn-danger">Login!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;