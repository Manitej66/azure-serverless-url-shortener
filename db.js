const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
mongoose.Promise = global.Promise;
let isConnected;
module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log("=> using existing database connection");
    return Promise.resolve();
  }
  console.log("=> using new database connection");
  return mongoose
    .connect(
      "mongodb://" +
        process.env.COSMOSDB_HOST +
        ":" +
        process.env.COSMOSDB_PORT +
        "/" +
        process.env.COSMOSDB_DBNAME +
        "?ssl=true&replicaSet=globaldb",
      {
        auth: {
          user: process.env.COSMOSDB_USER,
          password: process.env.COSMOSDB_PASSWORD,
        },
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: false,
      }
    )
    .then((db) => (isConnected = db.connections[0].readyState))
    .catch((err) => console.error(err));
};
