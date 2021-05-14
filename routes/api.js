const router = require("express").Router();
const { Workout } = require("../models");

// get the workouts 
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })

    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// post new workouts 
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// update the workouts 
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate({ _id: req.params.id },
    { $push: { exercises: req.body } })
    .then((dbWorkout) => {
      res.send(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//get the dashboard using /api/workouts/range
router.get("/api/workouts/range", (req, res) => {

  Workout.find({}).then(dbWorkout => {
      console.log("ALL WORKOUTS");
      console.log(dbWorkout);

      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });

});




module.exports = router;