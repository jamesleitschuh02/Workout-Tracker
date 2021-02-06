module.exports = function (app) {
  app.get("/api/workouts", (_req, res) => {
    db.workoutSeed.find({}).catch((err) => {
      res.status(404).json(err);
    });
    res.json(workout);
  });
};
