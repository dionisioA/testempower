const router = require('express').Router();
const empowerSkillCtrl= require('../controllers/empowerSkils.controllers');
//Agregar una oferta en el sistema
router.post('/competencias', empowerSkillCtrl.addSkill);
//Obtener Todas las Ofertas de la plataforma
router.get('/competencias', empowerSkillCtrl.getSkills);
router.get('/competencias/nivel', empowerSkillCtrl.getSkillLevels);
//Obtener una oferta específica
router.get('/competencias/:id', empowerSkillCtrl.getSkill);
router.get('/competencias/nivel/:id', empowerSkillCtrl.getSkillLevel);
//Obtener ofertas por tipo de competencia

//Obtener Ofertas por formacion academica

//Modificar una oferta

//Eliminar una oferta
module.exports = router;