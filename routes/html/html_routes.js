const router = require('express').Router();

const{getBurgers} = require('../../controllers/burgers_controller');

router.get('/', (req, res) => {
  getBurgers().then(burgersData => {
    res.render('home', {burgers: burgersdata});
  })
  .catch(err => {
    res.status(500).end();
  });
});

module.exports = router;