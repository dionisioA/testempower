const router = require('express').Router();
const modalityCtrl= require('../controllers/workModality.controllers');
//Agregar una oferta en el sistema
router.post('/modalidad', modalityCtrl.addModality);
//Obtener Todas las Ofertas de la plataforma
router.get('/modalidad', modalityCtrl.getModalities);
//Obtener una oferta específica
router.get('/modalidad/:id', modalityCtrl.getModality);
//Obtener ofertas por tipo de competencia

//Obtener Ofertas por formacion academica

//Modificar una oferta

//Eliminar una oferta
module.exports = router;