// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our results model
const db = require("../models/results");

// Routes
// =============================================================
module.exports = function(app) {

  // List all results
  app.get("/api/results/", function(req, res) {
    db.findAll({})
      .then(function(dbResult) {
        res.json(dbResult);
      });
  });

  // Get results by "id"
  app.get("/api/results/:id", function(req, res) {
    db.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbResult) {
        res.json(dbResult);
      });
  });

  // Insert a new result
  app.post("/api/results/new", function(req, res) {
    console.log(req.body);
    db.create({
      inputTemperature: req.body.inputTemperature,
      targetUnitOfMeasure: req.body.targetUnitOfMeasure,
      studentAnswer: req.body.studentAnswer,
      authoritativeAnswer: req.body.authoritativeAnswer,
      result: req.body.result
    })
      .then(function(dbResult) {
        res.json(dbResult);
      });
  });

  // Update result by "id"
  app.put("/api/results/edit/:id", function(req, res) {
    db.update({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbResult) {
        res.json(dbResult);
      });
  });

  // Delete results by "id"
  app.delete("/api/results/delete/:id", function(req, res) {
    db.destroy(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbResult) {
        res.json(dbResult);
      });
  });
};
