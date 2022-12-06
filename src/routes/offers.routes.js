const router = require('express').Router();
const offersCtrl= require('../controllers/offers.controllers');
//Agregar una oferta en el sistema
router.post('/ofertas', offersCtrl.createOffer);
//Obtener Todas las Ofertas de la plataforma
router.get('/ofertas', offersCtrl.getOffers);
//Obtener una oferta específica
router.get('/ofertas/:id', offersCtrl.getOffer);
//Obtener ofertas resumidas
router.get('/resumenOfertas',offersCtrl.getResumOffer); 
//Obtener ofertas resumidas EMpresa especifica
router.get('/resumenOfertas/:id', offersCtrl.getResumOfferbyCompany);
//Obtener Ofertas por formacion academica

//Modificar una oferta

//Actualizar status de la oferta
router.patch('/ofertas/estado', offersCtrl.updateStatus);

//Agregar educación por oferta
router.post('/oferta/educacion', offersCtrl.addEducationPerOffer);
router.get('/ofertas/:offerId/educacion', offersCtrl.getEducationPerOffer);




module.exports = router;