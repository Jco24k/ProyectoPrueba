const conexion = require('../conexion/db');

exports.guardar = (marca,desc,cant,fecha_v,precio,id_lote)=>{
    try {
        conexion.query("INSERT INTO producto set?",{id:'',marca:marca,
          descripcion:desc,cantidad:cant,fch_ven:fecha_v,precio:precio,id_lote:id_lote});
        return true;          
      }
      catch (e) {
        console.log(e);
        return false;
      }
    
};
exports.update_cargo = (req,res)=>{
  const id = req.body.codigo;
  const car = req.body.cargo;
  const sue = req.body.sueldo;
  conexion.query('update cargo set ? where id_cargo = ?',[{cargo:car,sueldo:sue},id],(error,results)=>{
      if(error){
        console.log(error);
      }else{
        res.redirect('/listar/cargo');
      }
  });
};


exports.delete_cargo = (req,res)=>{
  const cod = req.params.codigo;
  conexion.query('delete from cargo where id_cargo = ?',[cod],(error,results)=>{
      if(error){
        console.log(error);
      }else{
        res.redirect('/listar/cargo');
      }
  });
};