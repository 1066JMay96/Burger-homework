const router = require('express').Router();

const { getBurgers, createburger, updateBurgers, deleteBurgers } = require('../../controllers/burger_controller');


router.get('/burgers', (req, res) => {

  getBurgers()
  .then(burgersData => {
    res.status(200)
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.post('/burgers', (req, res) => {
  
  createburger(req.body)
  .then(burgersData => {
    res.status(200).json(burgersData);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.put('/burgers/:id', (req, res) => {
  updateBurgers(req.params.id)
  .then(burgersData =>{
    if(burgersData.code ===404){
      return res.status(404).json(burgersData);
    }
    res.status(200).json(burgersData);
  })
  .catch(err =>{
    res.status(500).json(err);
  });
});

router.delete('/api/burgers/:id', (req, res) => {
  deleteBurgers(req.params.id)
  .then(burgersData => {
    if (burgersData.code === 404) {
      return res.status(404).json(burgersData);
    }
    res.status(200).json(burgersData);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});
module.exports = router;