import Details from "./models/Details.js";

const DefaultData = async () => {
  try {
    // to insert data to server from backend directly
    Details.insertMany({
      name: "Abhishek",
      phone: "8219239384",
      email: "abhishkbhi@gmail.com",
      bloodgroup: "O+"
    })

    console.log("Data imported successfully......");
  } catch (error) {
    console.log("Some error while inserting data..", error.message);
  }
};

export default DefaultData;
