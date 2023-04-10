const app=require('./app')
const rutasEmpleados=require('./router/ruta_empleado');
const rutasCargos=require('./router/ruta_cargo')
const rutasCategorias=require('./router/ruta_categoria');
const rutasProductos=require('./router/ruta_producto')
const rutasClientes=require('./router/ruta_cliente')
const rutasVentas=require('./router/ruta_venta')
const rutasDetaslleVentas=require('./router/ruta_detalle_venta')
const rutasFacturas=require('./router/ruta_factura')
require('./database/conexion')

//rutas
app.use('/empleados',rutasEmpleados)
app.use('/cargos',rutasCargos)
app.use('/categorias',rutasCategorias)
app.use('/productos',rutasProductos)
app.use('/clientes',rutasClientes)
app.use('/ventas',rutasVentas)
app.use('/detallesVentas',rutasDetaslleVentas)
app.use('/facturas',rutasFacturas)


//config
const port =(process.env.port || 3000);
app.set('port',port);


app.use((req,res)=>{
    res.status(400).send("no se ecuntra la pagina")
})

app.listen(port,()=>{
    console.log(`servidor http://localhost:${port}`);
})

//camilo