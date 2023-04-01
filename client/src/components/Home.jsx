import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayItems from "./DisplayItems";
import { saveUserDetails } from "../api/api";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  });

  const [userdata, setuserdata] = useState({
    name: "",
    phone: "",
    email: "",
    bloodgroup: ""
  });


  const onChange = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Front end ", userdata);

    console.log(userdata);
    try {
      saveUserDetails(userdata);
    } catch(error) {
      console.log("Front error", error);
    }
  };

  return (
    <div style={{ width: 500, margin: "auto" }}>
      <form method = "POST" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label mt-3">
            Name
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name"
            onChange={onChange}
            name="name"
          />

          <label for="exampleFormControlInput1" class="form-label mt-3">
            Phone Number
          </label>
          <input
            type="tel"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Phone number"
            name="phone"
            onChange={onChange}
          />

          <label for="exampleFormControlInput1" class="form-label mt-3">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            onChange={onChange}
          />

          <label for="exampleFormControlInput1" class="form-label mt-3">
            Blood Group
          </label>
          <input
            type="String"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Blood Group"
            name="bloodgroup"
            onChange={onChange}
          />

          <div class="col-auto mt-3">
            <button type="submit" class="btn btn-primary mb-3">
              Save Details
            </button>
          </div>
        </div>
      </form>

      <DisplayItems></DisplayItems>
    </div>
  );
};

export default Home;
