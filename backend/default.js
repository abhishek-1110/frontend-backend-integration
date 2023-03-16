import { products } from "./constants/data.js";
import Product from "./models/product-schema.js";

import { users } from "./constants/userdata.js";
import User from "./models/User.js";

const DefaultData = async () => {
  try {
    // to insert data to server from backend directly
    await Product.deleteMany({});
    await Product.insertMany(products);

    // await User.insertMany(users);

    console.log("Data imported successfully......");
  } catch (error) {
    console.log("Some error while inserting data..", error.message);
  }
};

export default DefaultData;
