const conexion=require('./conexion');



function showVenta(req,res){
    SQL="select * from ventas";
    conexion.query(SQL,(err,row)=>{
        if(err){
            console.log('Ocurrio un error al ejecutar la sentyencia '+err);
        }else{
            res.json(row)
        }
    })
}





module.exports={
    showVenta,
}