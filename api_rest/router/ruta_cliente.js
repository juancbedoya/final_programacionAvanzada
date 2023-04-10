const router=require('express').Router();
const colsutasCliente=require('../database/consulta_cliente');

router.get('/',colsutasCliente.showCliente);
router.put('/:id',colsutasCliente.updateClientes);
router.post('/',colsutasCliente.addClientes);
router.delete('/:id',colsutasCliente.deleteClientes);
router.get('/:id',colsutasCliente.listIdClientes);


module.exports=router;