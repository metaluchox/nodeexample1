const colors = require('colors');
const fs = require('fs');

const crearFile = async (param1 = 5, param2 = 10, listar = false)=>{

    try {

        if(listar){
            let salida ='';
            for (let x=1; x<=param2; x++) {
                salida += `${param1} x ${x} = ${param1*x} \n`;
            }
            
            fs.writeFileSync(`./salida/tabla-${param1}.txt`, salida);

        }


        return ` 
        ====================
        Tabla de : ${param1}  creada
        ====================
        `;
        
       

    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearFile
}
