const conexion=require('./conexion');



function showCargos(req,res){
    SQL="select * from cargos";
    conexion.query(SQL,(err,row)=>{
        if(err){
            console.log('Ocurrio un error al ejecutar la sentyencia '+err);
        }else{
            res.json(row)
        }
    })
}

function deleteCargos(req,res){
    const {id}=req.params;
    let sql=`DELETE FROM cargos WHERE id_cargo='${id}'`;
    conexion.query(sql,(err,row)=>{
        if(err) throw err;
        else{
            res.json({status:'registro eliminado'})
        }
    })
}


function listIdCargos(req,res){
    const {id}=req.params
    let sql="SELECT * FROM cargos where id_cargo = ?";
    conexion.query(sql,[id],(err,row)=>{
        if(err) throw err;
        else{
            res.json(row)
        }
    })
}


function addCargos(req,res){
    const{nombre}=req.body;
    let sql=`INSERT INTO cargos (nombre) VALUES ('${nombre}')`;
    conexion.query(sql,(err,row)=>{
        if(err) throw err;
        else{
            res.json({status:'registro agregado'})
        }
    })
}

function updateCargos(req,res){
    const {id}=req.params;
    const {nombre}=req.body;
    let sql=`UPDATE cargos SET nombre='${nombre}' WHERE id_cargo = '${id}'`;
    conexion.query(sql,(err,row,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'registro actualizado'})
        }
    })
}




module.exports={
    showCargos,
    deleteCargos,
    listIdCargos,
    addCargos,
    updateCargos
}