const router=require('express').Router();
const colsutasVenta=require('../database/consulta_venta');

router.get('/',colsutasVenta.showVenta)

module.exports=router;