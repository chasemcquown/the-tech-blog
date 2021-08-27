const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const loginRoutes = require('./login-route');
const dashboardRoutes = require('./dashboard-routes.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/signup', loginRoutes);

module.exports = router;
