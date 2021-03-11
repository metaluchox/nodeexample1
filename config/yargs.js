const argv = require('yargs')
                        .option('p',{
                            alias: 'param1',
                            type: 'number',
                            demandOption: true,
                            describe:'Es el valor de la tabla de mutiplicar'
                        })
                        .option('p2',{
                            alias: 'param2',
                            type: 'number',
                            demandOption: true,
                            describe:'Es la cantidad de valor de la tabla de mutiplicar'
                        })                        
                        .option('l',{
                            alias: 'listar',
                            type: 'boolean',
                            demandOption: true,
                            default: false,
                            describe:'Muestra la lista de multiplicar'
                        })
                        .check((argv, option) =>{
                            if(isNaN(argv.p)){
                                throw 'El parametro debe ser numerico oe'
                            }
                            return true
                        })
                        .argv;

module.exports= argv;