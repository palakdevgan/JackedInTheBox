const router = require("express").Router();
const userRoutes = require("./user-routes");
const workoutRoutes = require("./workout-routes");
const previousworkouts = require("./previousworkouts-routes");
router.use("/users", userRoutes);
router.use("/workouts", workoutRoutes);
router.use("/previousworkouts", previousworkouts);

module.exports = router;