const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
	res.render('signup');
});

module.exports = router;