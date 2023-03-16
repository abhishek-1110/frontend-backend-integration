import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <form className="d-flex mt-4 " role="search" style={{justifyContent: "center"}}>
      <Link type="button" className="btn btn-outline-success mx-2" to="/signup">
        Sign up
      </Link>
      <Link className="btn btn-outline-success mx-2" type="button" to="/login">
        Login
      </Link>
    </form>
  );
};

export default Home;
