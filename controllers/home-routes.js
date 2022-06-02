const router = require("express").Router();
const { Workout, User } = require("../models");

router.get("/", (req, res) => {
  Workout.findAll({
    order: [["date", "DESC"]],
    limit: 2,
  })
    .then((dbWorkoutData) => {
      const workouts = dbWorkoutData.map((workout) =>
        workout.get({ plain: true })
      );
      res.render("homepage", { workouts, loggedIn: true });
    })
    .catch((err) => {
      console.log(
        err,
        "There was a problem with getting all workouts.. Try again!"
      );
    });
});

router.get("/exercise", (req, res) => {
  res.render("giphy");
});
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/previousworkouts", (req, res) => {
  res.render("previousworkouts");
});

module.exports = router;
