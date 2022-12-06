const router = require('express').Router();
const academicCtrl= require('../controllers/academic.controllers');
//Agregar una oferta en el sistema
router.post('/grado', academicCtrl.addDegreeTitle);
//Obtener Todas las Ofertas de la plataforma
router.get('/grado', academicCtrl.getDegreeTitles);
//Obtener una oferta específica
router.get('/grado/:id', academicCtrl.getDegreeTitle);
//Obtener ofertas por tipo de competencia

//Obtener Ofertas por formacion academica

//Modificar una oferta

//Eliminar una oferta


//----------------Rutas de educación por oferta-------------------//

//Agregar educación
router.post('/educacion', academicCtrl.addEducation);
router.get('/educacion', academicCtrl.getEducation);


module.exports = router;