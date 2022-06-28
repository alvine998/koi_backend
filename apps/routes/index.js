var express = require('express');
var router = express.Router();
const cUsers = require("../controllers/Users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user/create', cUsers.create)
router.post('/user/auth', cUsers.auth)

module.exports = router;
