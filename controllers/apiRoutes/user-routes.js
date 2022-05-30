const router = require("express").Router();

const { User } = require("../../models");

// get all users, similar to Select * from Users;

router.get("/", (req, res) => {
  User.findAll()
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.log(
        err,
        "There was an error in getting all users from database... Try Again!"
      );
      res.status(500).json(err);
    });
});

// get user by ID, similar to Select * from Users, where id = 1;

router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
      if (!userData) {
        res
          .status(404)
          .json({ message: "Theres no user found with this ID, try again.." });
      }
      res.json(userData);
    })
    .catch((err) => {
      console.log(err, "There was an error in getting a single ID");
      7;
      res.status(500).json(err);
    });
});

// post/create new user, similar to INSET INTO users (username, email,password,workouttype, weight, height)

router.post("/", (req, res) => {
  // expects username, email, password, workoutType, weight, height

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    workoutType: req.body.workoutType,
    weight: req.body.weight,
    height: req.body.height,
  })
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.log(
        err,
        "There was an error in posting/creating a new user. Try again!"
      );
      res.status(500).json(err);
    });
});

// update a user [by ID]
router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
      if (!userData) {
        res.status(404).json({ message: "No user found with this id" });
      }
      res.json(userData);
    })
    .catch((err) => {
      console.log(
        err,
        "There was an error in PUT METHOD updating a user, Try again"
      );
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
      if (!userData) {
        res
          .status(404)
          .json({ message: "Theres no user with this ID.. Try again" });
      }
      res.json(userData);
    })
    .catch((err) => {
      console.log(err, "There was a problem with deleting user.. Try again");
      res.status(500).json(err);
    });
});

module.exports = router;
