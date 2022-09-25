const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(conn.connection.host.underline.cyan);
};

module.exports = connectDB;
