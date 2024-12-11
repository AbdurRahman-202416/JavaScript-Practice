// import single 
import sum from './ExportFile'
// import from all on this js file
import * as allfunc  from './ExportFile'

//import We have need to some  function from this file 
import { ramdomNumber, add} from './ExportFile'

console.log(allfunc.ramdomNumber());
console.log(allfunc.sum(10,20));


 let add= sum(29, 30);
 console.log(add);
 console.log(allfunc)
