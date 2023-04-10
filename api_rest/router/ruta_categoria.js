const router=require('express').Router();
const colsutasCategoria=require('../database/consulta_categoria');

router.get('/',colsutasCategoria.showCategoria);
router.get('/:id',colsutasCategoria.listIdCategorias);
router.post('/',colsutasCategoria.addCategorias);
router.put('/:id',colsutasCategoria.updateCategorias);
router.delete('/:id',colsutasCategoria.deleteCategorias)

module.exports=router;