/* server.routes.users.js - Mohammad Aljelmawi 301-268-246 comp229 s23 18-jun-2023 */ 


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Place Holder');
});

module.exports = router;
