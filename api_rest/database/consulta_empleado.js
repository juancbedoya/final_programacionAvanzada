const conexion=require('./conexion');
const jwt=require('jsonwebtoken');

//funciones para el loginn______________________________________________________________________________
function loginUsuario(req,res){
    const {usuario,password}=req.body;
    let SQL="SELECT usuario,cargo_id FROM empleados WHERE usuario=? and password=?";
    conexion.query(SQL,[usuario,password],(err,row,fields)=>{
        if(!err){
            if(row.length>0){
                let data=JSON.stringify(row[0]);
                let token=jwt.sign(data,'stil');
                res.json({token})
            }else{
                res.json('usuario o claves incorrectos')
                
            }
        }else{
            console.log(err);
        }
    })
}



function informacion(req,res){
    console.log(req.user);
    res.json('informacion secreta');
}

function veryfyToken(req,res,next){
    if(!req.headers.authorization) return res.status(401).json('No autorizado');
    let token=req.headers.authorization.substr(7);

    // console.log(token);

    // if(token !== ''){
    //     const content=jwt.verify(token,'stil');
    //     req.data=content;
    //     next();
    //     // console.log(content);
    // }else{
    //     res.status(401).json('Token Vacio')
    // }

    if (token) {

        return jwt.verify(token,'stil', function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: "Failed to authenticate token.",
                });
            }
            req.user = decoded;
            return next();
        });
    }else if(token == ''){
        res.status(401).json('token vacio')
    }

}

//_______________________________________________________________________________________________



//funciones para las vistas_____________________________________________________________________________



function showEmpleados(req,res){
    let SQL="SELECT empleados.id_empleado,empleados.nombre_empleado,empleados.apellidos,empleados.correo,\n"+
    "empleados.usuario,empleados.password,empleados.telefono,cargos.nombre FROM empleados INNER JOIN\n"+
    "cargos on cargos.id_cargo=empleados.cargo_id";
    conexion.query(SQL,(err,row,fields)=>{
        if(err){
            console.log('ERROR DE LA CONSULTA, ERROR: '+err);
        }else{
            res.json(row)
        }
    })
}


function deleteEmpleados(req,res){
    const {id}=req.params;
    let sql=`DELETE FROM empleados WHERE id_empleado='${id}'`;
    conexion.query(sql,(err,row)=>{
        if(err) throw err;
        else{
            res.json({status:'registro eliminado'})
        }
    })
}


function listIdEnpleados(req,res){
    const {id}=req.params
    let sql="SELECT * FROM empleados where id_empleado = ?";
    conexion.query(sql,[id],(err,row)=>{
        if(err) throw err;
        else{
            res.json(row)
        }
    })
}


function addEmpleados(req,res){
    const {nombre_empleado,apellidos,correo,usuario,password,telefono,nombre}=req.body;
    let sql=`INSERT INTO empleados (nombre_empleado,apellidos,correo,usuario,password,telefono,cargo_id) VALUES ('${nombre_empleado}','${apellidos}','${correo}','${usuario}','${password}','${telefono}','${nombre}')`;
    conexion.query(sql,(err,row)=>{
        if(err) throw err;
        else{
            res.json({status:'registro agregado'})
        }
    })
}

function updateEmpleados(req,res){
    const {id}=req.params;
    const {nombre_empleado,apellidos,correo,usuario,password,telefono,nombre}=req.body;
    let sql=`UPDATE empleados SET nombre_empleado='${nombre_empleado}',apellidos='${apellidos}',correo='${correo}',usuario='${usuario}',password='${password}',telefono='${telefono}',cargo_id='${nombre}' WHERE id_empleado = '${id}'`;
    conexion.query(sql,(err,row,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'registro actualizado'})
        }
    })
}






module.exports={
    loginUsuario,
    showEmpleados,
    informacion,
    veryfyToken,
    deleteEmpleados,
    listIdEnpleados,
    updateEmpleados,
    addEmpleados,

}