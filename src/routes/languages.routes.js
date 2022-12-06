const router = require('express').Router();
const languagesCtrl= require('../controllers/languages.controllers');
router.get('/idiomas', languagesCtrl.getLanguages);
module.exports=router;