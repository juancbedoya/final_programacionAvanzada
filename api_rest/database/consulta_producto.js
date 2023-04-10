const conexion=require('./conexion');



function showProductos(req,res){
    let SQL="SELECT productos.id_producto,productos.nombre_producto,productos.img,productos.descripcion,productos.marca,productos.precio,productos.cantidad,categorias.nombre\n"+
    "FROM productos INNER JOIN categorias ON productos.categoria_id=categorias.id_categoria ORDER BY productos.id_producto";
    conexion.query(SQL,(err,row,fields)=>{
        if(err){
            console.log('ERROR DE LA CONSULTA, ERROR: '+err);
        }else{
            res.json(row)
        }
    })
}


function deleteProductos(req,res){
    const {id}=req.params;
    let sql=`DELETE FROM productos WHERE id_producto='${id}'`;
    conexion.query(sql,(err,row)=>{
        if(err) throw err;
        else{
            res.json({status:'registro eliminado'})
        }
    })
}


function listIdProductos(req,res){
    const {id}=req.params
    let sql="SELECT * FROM productos where id_producto = ?";
    conexion.query(sql,[id],(err,row)=>{
        if(err) throw err;
        else{
            res.json(row)
        }
    })
}


function addProductos(req,res){
    const {nombre,img,descripcion,marca,precio,cantidad,categoria_id}=req.body;
    let sql=`INSERT INTO productos (nombre_producto,descripcion,marca,precio,cantidad,categoria_id) VALUES ('${nombre}','${img}','${descripcion}','${marca}','${precio}','${cantidad}','${categoria_id}')`;
    conexion.query(sql,(err,row)=>{
        if(err) throw err;
        else{
            res.json({status:'registro agregado'})
        }
    })
}



function updateProductos(req,res){
    const {id}=req.params;
    const {nombre,img,descripcion,marca,precio,cantidad,categoria_id}=req.body;
    let sql=`UPDATE productos SET nombre_producto='${nombre}',img='${img}',descripcion='${descripcion}',marca='${marca}',precio='${precio}',cantidad='${cantidad}',categoria_id='${categoria_id}' WHERE id_producto = '${id}'`;
    conexion.query(sql,(err,row,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'registro actualizado'})
        }
    })
}






module.exports={
    showProductos,
    addProductos,
    updateProductos,
    listIdProductos,
    deleteProductos
    
}