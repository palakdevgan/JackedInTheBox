const { User } = require("../models");

const userSeedData = [{
        username: "George",
        email: "george@live.com",
        password: "test",
        workoutType: "running",
        age: 35,
        weight: 80,
        height: 180,
    },
    {
        username: "john",
        email: "john@live.com",
        password: "test",
        workoutType: "running",
        age: 30,
        weight: 90,
        height: 180,
    },
    {
        username: "mike",
        email: "mike@live.com",
        password: "test",
        workoutType: "running",
        age: 15,
        weight: 100,
        height: 180,
    },
    {
        username: "tanya",
        email: "tanya@live.com",
        password: "test",
        workoutType: "running",
        age: 20,
        weight: 70,
        height: 180,
    },
    {
        username: "lisa",
        email: "lisa@live.com",
        password: "test",
        workoutType: "running",
        age: 25,
        weight: 60,
        height: 180,
    },
    {
        username: "michelle",
        email: "michelle@live.com",
        password: "test",
        workoutType: "running",
        age: 28,
        weight: 65,
        height: 180,
    },
    {
        username: "tim",
        email: "tim@live.com",
        password: "test",
        workoutType: "running",
        age: 26,
        weight: 80,
        height: 180,
    },
    {
        username: "anthony",
        email: "anthony@live.com",
        password: "test",
        workoutType: "running",
        age: 19,
        weight: 85,
        height: 180,
    },
    {
        username: "tessa",
        email: "tessa@live.com",
        password: "test",
        workoutType: "running",
        age: 30,
        weight: 95,
        height: 180,
    },
];

const seedUsers = () =>
    User.bulkCreate(userSeedData, { individualHooks: true });

module.exports = seedUsers;