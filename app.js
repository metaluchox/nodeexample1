
const { number } = require('yargs');
const {crearFile} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// manera oldshool
// const [, , arg3 = 'base=5']  = process.argv;
// const [, param1=5] = arg3.split('=');

// console.log(argv);
// console.log(argv.l);

 crearFile(argv.p,argv.p2, argv.l)
     .then(msj => console.log(msj.rainbow))
     .catch( err => console.log(`Error =>${err}`) )
