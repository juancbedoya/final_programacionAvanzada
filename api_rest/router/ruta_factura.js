const router=require('express').Router();
const colsutasFactura=require('../database/consulta_factura');

router.get('/',colsutasFactura.showFacturas)

module.exports=router;