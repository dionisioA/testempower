const router = require('express').Router();
const jobsCtrl= require('../controllers/job.controllers');
//Agregar una oferta en el sistema
router.post('/puestos', jobsCtrl.addJob);
//Obtener Todas las Ofertas de la plataforma
router.get('/puestos', jobsCtrl.getJobs);
router.get('/puestos/id/:name', jobsCtrl.getJobId);
//Obtener una oferta específica
router.get('/puestos/:id', jobsCtrl.getJob);
//Obtener ofertas por tipo de competencia

//Obtener Ofertas por formacion academica

//Modificar una oferta

//Eliminar una oferta
module.exports = router;