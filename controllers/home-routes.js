const router = require("express").Router();
const { Workout, User } = require("../models");
const { Op } = require('sequelize');

const startDate = new Date("2022-06-01 00:00:00");
const endDate = new Date("2022-06-03 00:00:00");

router.get("/homepage", (req, res) => {
    Workout.findAll({
            where: {
                user_id: req.session.user_id,
            },
            order: [
                ["date", "DESC"]
            ],
            limit: 2,
            // include: [{
            //     model: User,
            //     attributes: ['username']
            // }]
        })
        .then((dbWorkoutData) => {
            const workouts = dbWorkoutData.map((workout) =>
                workout.get({ plain: true })
            );


            res.render("homepage", { workouts, loggedIn: req.session.loggedIn, username: req.session.username });
        })
        .catch((err) => {
            console.log(
                err,
                "There was a problem with getting all workouts.. Try again!"
            );
        });
});

router.get("/", (req, res) => {
    res.render("giphy", { loggedIn: req.session.loggedIn });
});
router.get("/register", (req, res) => {
    res.render("register");
});
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render("login");
});
router.get("/previousworkouts", (req, res) => {
    res.render("previousworkouts", { loggedIn: req.session.loggedIn });
});

// BMI route passing user session details including weight, height and age
router.get("/bmi", (req, res) => {
    res.render("calculateBMI", { loggedIn: req.session.loggedIn, age: req.session.age, weight: req.session.weight, height: req.session.height });
});
module.exports = router;