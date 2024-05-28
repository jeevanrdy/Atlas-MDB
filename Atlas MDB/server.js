let mongoose = require("mongoose");

let connectToMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jeevanrdy:jeevanrdy@skynet.ycaxxus.mongodb.net/?retryWrites=true&w=majority&appName=SkyNet"
    );
    console.log("Connected Succesfully to MongoDB");
  } catch (error) {
    console.log("Unable to connect to MongoDB");
  }
};

connectToMDB();
