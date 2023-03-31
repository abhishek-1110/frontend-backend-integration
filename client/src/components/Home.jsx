import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  });

  return (
    <div style={{ width: 500, margin: "auto" }}>
      <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label mt-3">
            Name
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name"
            value={localStorage.getItem('user')}
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
          />

          <div class="col-auto mt-3">
            <button type="submit" class="btn btn-primary mb-3">
              Save Details
            </button>
          </div>
        </div>
      </form>


      
    </div>
  );
};

export default Home;
