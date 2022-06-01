const User = require("./User");
const Workout = require("./Workout");

// todo check relationship of User/Workout
User.hasMany(Workout, {
  foreignKey: "user_id",
});

Workout.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Workout };
