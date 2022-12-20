import mongoose from "mongoose";

const Connection = async (userName, password) => {
  const URL = `mongodb+srv://${userName}:${password}@blog-app.ttcecni.mongodb.net/?retryWrites=true&w=majority`;
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("Database connection established");
  } catch (error) {
    console.log("Error connecting to Database: " + error);
  }
};

export default Connection;
