const {Client} = require('pg');
const datos ={
    host: 'surus.db.elephantsql.com',
    database: 'sppnlrkc',
    user: 'sppnlrkc',
    password: 'mlnf6jvN2nSKxA5keQWdWPVeSFH0MfWo',
    port: '5432'
};

const conexion = new Client(datos);
conexion.connect((error)=>{
    if(error){
        console.log('Error:'+error);
    }else{
        console.log('Conexión exitosa');
    }
});

module.exports = conexion;