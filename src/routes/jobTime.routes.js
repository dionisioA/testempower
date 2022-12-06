const router = require('express').Router();
const jobTimeCtrl= require('../controllers/jobTime.controller');
//Agregar una oferta en el sistema
router.post('/jornada', jobTimeCtrl.addJobTime);
//Obtener Todas las Ofertas de la plataforma
router.get('/jornada', jobTimeCtrl.getJobTimes);
//Obtener una oferta específica
router.get('/jornada/:id', jobTimeCtrl.getJobTime);
//Obtener ofertas por tipo de competencia

//Obtener Ofertas por formacion academica

//Modificar una oferta

//Eliminar una oferta
module.exports = router;