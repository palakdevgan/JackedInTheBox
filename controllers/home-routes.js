const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
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
