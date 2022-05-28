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
  {
    username: "john",
    email: "john@live.com",
    password: "test",
    wordoutType: "running",
    weight: 156,
    height: 180,
  },
  {
    username: "mike",
    email: "mike@live.com",
    password: "test",
    wordoutType: "running",
    weight: 156,
    height: 180,
  },
  {
    username: "tanya",
    email: "tanya@live.com",
    password: "test",
    wordoutType: "running",
    weight: 156,
    height: 180,
  },
  {
    username: "lisa",
    email: "lisa@live.com",
    password: "test",
    wordoutType: "running",
    weight: 156,
    height: 180,
  },
  {
    username: "michelle",
    email: "michelle@live.com",
    password: "test",
    wordoutType: "running",
    weight: 156,
    height: 180,
  },
  {
    username: "tim",
    email: "tim@live.com",
    password: "test",
    wordoutType: "running",
    weight: 156,
    height: 180,
  },
  {
    username: "anthony",
    email: "anthony@live.com",
    password: "test",
    wordoutType: "running",
    weight: 156,
    height: 180,
  },
  {
    username: "tessa",
    email: "tessa@live.com",
    password: "test",
    wordoutType: "running",
    weight: 156,
    height: 180,
  },
];

const seedUsers = () =>
  User.bulkCreate(userSeedData, { individualHooks: true });

module.exports = seedUsers;
