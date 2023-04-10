const mysql=require('mysql2');
const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tienda_bolsos'
});

conexion.connect((err)=>{
    if(err){
        console.log('Ha ocurrido un error',err);
    }else{
        console.log('conexion establecidad');
    }
})

module.exports=conexion;