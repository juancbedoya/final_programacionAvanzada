const conexion=require('./conexion');



function showDetallseVentas(req,res){
    SQL="select * from detalles_ventas";
    conexion.query(SQL,(err,row)=>{
        if(err){
            console.log('Ocurrio un error al ejecutar la sentyencia '+err);
        }else{
            res.json(row)
        }
    })
}





module.exports={
    showDetallseVentas,
}