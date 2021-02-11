const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      {_id: req.params.id},
      { $push: { exercises: req.body } }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(404);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
    })
  });

  app.get("/api/workouts/range", (_req, res) => {
    db.Workout.find({}).catch((err) => {
      res.status(404).json(err);
    });
    res.json(workout);
  });
};
