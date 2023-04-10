const router=require('express').Router();
const colsutasCargo=require('../database/consulta_cargo');

router.get('/',colsutasCargo.showCargos);
router.post('/',colsutasCargo.addCargos);
router.get('/:id',colsutasCargo.listIdCargos);
router.put('/:id',colsutasCargo.updateCargos);
router.delete('/:id',colsutasCargo.deleteCargos);



module.exports=router;