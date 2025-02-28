const mongoose = require('mongoose');

const dbConn = async () => {
  try {
    await mongoose.connect('mongodb+srv://mohammedsiddiq2311:dVVU2RVNftv25sLW@task1.y57ps.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Task1');
    console.log('Database connected');
  } catch (error) {
    console.log('Connection failed:', error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = dbConn;
