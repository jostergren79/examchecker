// results.js this file creates the results model for our db

// requires sequelize
const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const results = sequelize.define("results", {
  inputTemperature: Sequelize.STRING,
  targetUnitOfMeasure: Sequelize.STRING,
  studentsResponse: Sequelize.INTEGER,
  authoritativeAnswer: Sequelize.INTEGER,
  result: Sequelize.STRING
},{
freezeTableName: true,
useStrict: false
});

results.sync();

module.exports = results;



