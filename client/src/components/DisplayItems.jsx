import React from "react";

const DisplayItems = ({ data, loading }) => {
  return (
    <>
      {loading.loadingstate === true ? (
        <div>Loading....</div>
      ) : (
        <div>
          <h3>Hi, {data.name}</h3>
          {data.length === 0 ? (
            <li>Please fill your details so that they can be shown here</li>
          ) : (
            <div>
              <h5>Your Details on our server: </h5>
              <ul>
                <li>Email: {data.email}</li>
                <li>Phone Number: {data.phone}</li>
                <li>Blood Group: {data.bloodgroup}</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DisplayItems;
