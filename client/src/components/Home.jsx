import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayItems from "./DisplayItems";
import { getUserDetails, saveUserDetails } from "../api/api";

const Home = () => {
  const [loading, setLoading] = useState({
    loadingstate: true,
  });

  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    bloodgroup: "",
  });

  const getDetails = async () => {
    try {
      const response = await getUserDetails();
      if (response === undefined) {
        console.log("Cant find user details...");
        setLoading(false);
        return;
      }
      setTimeout(() => {
        setdata({
          name: response.name,
          email: response.email,
          phone: response.phone,
          bloodgroup: response.bloodgroup,
        });
        setLoading({
          loadingstate: false,
        });
      }, 1500);
    } catch (error) {
      console.log("Some error check API.", error);
    }
  };

  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    } else {
      getDetails();
    }
    // eslint-disable-next-line
  }, []);

  const [userdata, setuserdata] = useState({
    name: "",
    phone: "",
    email: "",
    bloodgroup: "",
  });

  const onChange = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await saveUserDetails(userdata);
      // console.log("Response details: ", response);
      if (response.status === 200) {
        getDetails();
      }
    } catch (error) {
      console.log("Frontend error", error);
    }
  };

  return (
    <div style={{ width: 500, margin: "auto" }}>
    <h4>Currently we don't support update, delete functionality, Please be careful while you fill your information..</h4>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label mt-3">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name"
            onChange={onChange}
            name="name"
          />

          <label for="exampleFormControlInput1" className="form-label mt-3">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Phone number"
            name="phone"
            onChange={onChange}
          />

          <label for="exampleFormControlInput1" className="form-label mt-3">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            onChange={onChange}
          />

          <label for="exampleFormControlInput1" className="form-label mt-3">
            Blood Group
          </label>
          <input
            type="String"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Blood Group"
            name="bloodgroup"
            onChange={onChange}
          />

          <div className="col-auto mt-3">
            <button type="submit" className="btn btn-primary mb-3">
              Save Details
            </button>
          </div>
        </div>
      </form>

      <DisplayItems data={data} loading = {loading}></DisplayItems>
    </div>
  );
};

export default Home;
