const router = require("express").Router();
const { Workout, User } = require("../../models");


// search previous workouts
router.post("/", (req, res) => {
    let from_date = req.body.from_date;
    let to_date = req.body.to_date;
    console.log(from_date, to_date);
    Workout.findAll()
        .then((workoutData) => {
            console.log(res.json(workoutData))
        })
        .catch((err) => {
            console.log(
                err,
                "There was a problem with getting all workouts.. Try again!"
            );
        });
});

module.exports = router;