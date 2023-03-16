import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-4">
      <Link type="button" className="btn btn-primary btn-lg" to="/signup">
        Signup
      </Link>
    </div>
  );
};

export default Login;
