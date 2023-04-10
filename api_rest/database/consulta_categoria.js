const conexion=require('./conexion');


function showCategoria(req,res){
    SQL="select * from categorias";
    conexion.query(SQL,(err,row)=>{
        if(err){
            console.log('Ocurrio un error al ejecutar la senteencia '+err);
        }else{
            res.json(row)
        }
    })
}

function deleteCategorias(req,res){
    const {id}=req.params;
    let sql=`DELETE FROM categorias WHERE id_categoria='${id}'`;
    conexion.query(sql,(err,row)=>{
        if(err) throw err;
        else{
            res.json({status:'registro eliminado'})
        }
    })
}


function listIdCategorias(req,res){
    const {id}=req.params
    let sql="SELECT * FROM categorias where id_categoria = ?";
    conexion.query(sql,[id],(err,row)=>{
        if(err) throw err;
        else{
            res.json(row)
        }
    })
}


function addCategorias(req,res){
    const{nombre}=req.body;
    let sql=`INSERT INTO categorias (nombre) VALUES ('${nombre}')`;
    conexion.query(sql,(err,row)=>{
        if(err) throw err;
        else{
            res.json({status:'registro agregado'})
        }
    })
}

function updateCategorias(req,res){
    const {id}=req.params;
    const {nombre}=req.body;
    let sql=`UPDATE categorias SET nombre='${nombre}' WHERE id_categoria = '${id}'`;
    conexion.query(sql,(err,row,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'registro actualizado'})
        }
    })
}





module.exports={
    showCategoria,
    addCategorias,
    updateCategorias,
    listIdCategorias,
    deleteCategorias
}