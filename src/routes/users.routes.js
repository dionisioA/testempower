const router = require('express').Router();
const userCtrl= require('../controllers/users.controllers');
const jwt = require('jsonwebtoken');
router.post('/signin', userCtrl.login);
router.post('/test',verifyToken, userCtrl.testToken);

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).json('No autorizado');
    }else{
        const token=req.headers.authorization.substr(7);
        if(token!==''){
           const content= jwt.verify(token, 'stil');
            console.log(token)
            req.data=content;
            next();

        }
       
    }
}
module.exports=router;