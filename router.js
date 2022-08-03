const conexion = require('./conexion/db');
const express = require('express');
const router = express.Router();

//RUTA PARA EL INDEX
router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/listar/producto',(req,res)=>{


        conexion.query("select id,marca,descripcion,cantidad,to_char(fch_ven,'dd/mm/yyyy') as fch_ven,precio,id_lote from producto order by id_lote",(error, results)=>{
            if(error){
                throw error;
            }else{
                console.log(results.rows)
                res.render('templates/producto/listar',{results:results.rows});

            }
        });    
});

module.exports = router;