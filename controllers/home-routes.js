const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('giphy');
});

module.exports = router;