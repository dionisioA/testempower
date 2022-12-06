const router = require('express').Router();
const currencyCtrl= require('../controllers/currency.controllers');
//Agregar una oferta en el sistema
router.post('/monedas', currencyCtrl.addCurrency);
//Obtener Todas las Ofertas de la plataforma
router.get('/monedas', currencyCtrl.getCurrencies);
router.get('/monedas/pago', currencyCtrl.getPaymentTypes);
//Obtener una oferta específica
router.get('/monedas/:id', currencyCtrl.getCurrency);
//Obtener ofertas por tipo de competencia

//Obtener Ofertas por formacion academica

//Modificar una oferta

//Eliminar una oferta
module.exports = router;