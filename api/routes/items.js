var express = require('express');
const { ITEMS } = require('./itemList');
const { header } = require('./masterData');
var router = express.Router();

/* GET users listing. */
router.get('/items', function(req, res, next) {
  res.status(200).json(
    {
      status: 200, 
      data: ITEMS
    })
});
router.get('/masterdata', function(req, res, next) {
  res.status(200).json(
    {
      status: 200, 
      data: header
    })
});


module.exports = router;
