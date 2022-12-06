const router = require('express').Router();
const applicantsCtrl= require('../controllers/applicants.controllers');

//Get all active applicants
router.get('/postulantesActivos', applicantsCtrl.getActiveApplicants);


module.exports = router;