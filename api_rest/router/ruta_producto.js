const router=require('express').Router();
const colsutasProducto=require('../database/consulta_producto');

router.get('/',colsutasProducto.showProductos);
router.get('/:id',colsutasProducto.listIdProductos);
router.post('/',colsutasProducto.addProductos);
router.delete('/:id',colsutasProducto.deleteProductos);
router.put('/:id',colsutasProducto.updateProductos)

module.exports=router;