const { User } = require("../models");

const userSeedData = [
  {
    username: "George",
    email: "george@live.com",
    password: "test",
    wordoutType: "running",
    weight: 156,
    height: 180,
  },
];

const seedUsers = () =>
  User.bulkCreate(userSeedData, { individualHooks: true });

module.exports = seedUsers;
