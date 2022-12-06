const router = require('express').Router();
const languageLevelCtrl= require('../controllers/languageLevel.controller');
router.get('/idiomas/niveles', languageLevelCtrl.getLanguageLevels);
module.exports=router;