import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    const { name, email, password, confirmpassword } = credentials;

    if (
      credentials.password.length === 0 ||
      credentials.confirmpassword.length === 0
    ) {
      alert("Password can't be empty.");
      setloading(false);
      return;
    } else if (credentials.password !== credentials.confirmpassword) {
      alert("Password not matching.");
      setloading(false);
      return;
    }

    // here need to write code on submission to send data to mongodb

    try {
      const response = await fetch("http://localhost:5000/signup/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmpassword,
        }),
      });

      const json = await response.json();
      console.log(json);

      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("username", json.username);
      setloading(false);
      navigate("/");
      // console.log("User has been saved");
    } catch (error) {
      console.log("Some error", error);
    }
    setloading(false);
  };

  const onChange = (e) => {
    // console.log(e.target.value);
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        method="POST"
                        onSubmit={handleSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Your Name"
                              name="name"
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Your Email"
                              name="email"
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Your Password"
                              name="password"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Repeat your password"
                              name="confirmpassword"
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            style={{ width: "150px" }}
                          >
                            {loading ? "Loading..." : "Register"}
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
