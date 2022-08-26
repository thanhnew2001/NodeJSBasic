const mongoose = require("mongoose")

//MONGO_URI = "mongodb+srv://thanh:thanh@cluster0.ntvke.mongodb.net/mydb?retryWrites=true&w=majority&poolSize=10";
MONGO_URI = "mongodb+srv://admin:admin@cluster0.mnwyjpj.mongodb.net/db1?retryWrites=true&w=majority";


exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};

