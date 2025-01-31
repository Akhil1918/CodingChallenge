const mongoose = require("mongoose");
require("dotenv").config(); 

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://akhil1918:akhil191817@cluster0.szzb2.mongodb.net/Testdatabase?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
