const router = require('express').Router();
const sectorCtrl= require('../controllers/productiveSector.controllers');
router.get('/sectores', sectorCtrl.getProductiveSector);
module.exports = router;