module.exports = function (app) {
  app.get("/api/workouts", (_req, res) => {
    db.workoutSeed.find({}).catch((err) => {
      res.status(404).json(err);
    });
    res.json(workout);
  });

  app.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;
    let body = req.body;
    db.Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(404).json(err);
      });
  });

  // createWorkout(data)
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).catch((err) => {
      console.error(err);
      res.json(err);
    });
    console.log(workout);
    res.json(workout);
  });

  // getWorkoutInRange()
  app.get("/api/workouts/range", (_req, res) => {
    db.Workout.find({}).catch((err) => {
      res.status(404).json(err);
    });
    res.json(workout);
  });
};
