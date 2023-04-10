const express=require('express');
const cors=require('cors');
const bodyParse=require('body-parser');



//express
const app=express();
app.use(bodyParse.urlencoded({extended:false}))

//cors
const listPermitidas=['http://localhost:4200'];
app.use(cors({origin:listPermitidas}));


//emitir los tipo de datos 
app.use(express.json())

module.exports=app;