const router=require('express').Router();
const colsutasDetalleVenta=require('../database/consulta_detalle_venta');

router.get('/',colsutasDetalleVenta.showDetallseVentas)

module.exports=router;