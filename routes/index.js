var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.statusCode = 200
	res.send("Home.")
})

module.exports = router;
