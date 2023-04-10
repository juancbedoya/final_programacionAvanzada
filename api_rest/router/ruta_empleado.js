const router=require('express').Router();
const { route } = require('../app');
const colsutasLogin=require('../database/consulta_empleado')


router.get('/',colsutasLogin.showEmpleados);
router.post('/singin',colsutasLogin.loginUsuario);
router.post('/test',colsutasLogin.veryfyToken,colsutasLogin.informacion);
router.delete('/:id',colsutasLogin.deleteEmpleados);
router.get('/:id',colsutasLogin.listIdEnpleados);
router.put('/:id',colsutasLogin.updateEmpleados)
router.post('/',colsutasLogin.addEmpleados);






module.exports=router;