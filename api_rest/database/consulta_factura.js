const conexion=require('./conexion');



function showFacturas(req,res){
    SQL="select * from facturas";
    conexion.query(SQL,(err,row)=>{
        if(err){
            console.log('Ocurrio un error al ejecutar la sentyencia '+err);
        }else{
            res.json(row)
        }
    })
}





module.exports={
    showFacturas,
}