const conexion=require('./conexion');



function showCliente(req,res){
    SQL="select * from clientes";
    conexion.query(SQL,(err,row)=>{
        if(err){
            console.log('Ocurrio un error al ejecutar la sentyencia '+err);
        }else{
            res.json(row)
        }
    })
}

function deleteClientes(req,res){
    const {id}=req.params;
    let sql=`DELETE FROM clientes WHERE id_cliente='${id}'`;
    conexion.query(sql,(err,row)=>{
        if(err) throw err;
        else{
            res.json({status:'registro eliminado'})
        }
    })
}


function listIdClientes(req,res){
    const {id}=req.params
    let sql="SELECT * FROM clientes where id_cliente = ?";
    conexion.query(sql,[id],(err,row)=>{
        if(err) throw err;
        else{
            res.json(row)
        }
    })
}


function addClientes(req,res){
    const {nombre,apellidos,documento,direccion,telefono}=req.body;
    let sql=`INSERT INTO clientes (nombre,apellidos,documento,direccion,telefono) VALUES ('${nombre}','${apellidos}','${documento}','${direccion}','${telefono}')`;
    conexion.query(sql,(err,row)=>{
        if(err) throw err;
        else{
            res.json({status:'registro agregado'})
        }
    })
}

function updateClientes(req,res){
    const {id}=req.params;
    const {nombre,apellidos,documento,direccion,telefono}=req.body;
    let sql=`UPDATE clientes SET nombre='${nombre}',apellidos='${apellidos}',documento='${documento}',direccion='${direccion}',telefono='${telefono}' WHERE id_cliente = '${id}'`;
    conexion.query(sql,(err,row,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'registro actualizado'})
        }
    })
}




module.exports={
    showCliente,
    updateClientes,
    deleteClientes,
    listIdClientes,
    addClientes
}

