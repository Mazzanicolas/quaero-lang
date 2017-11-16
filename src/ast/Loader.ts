import { State } from '../interpreter/State';
import { QPreDefFunction } from '../ast/QPreDefFunction';
import { QPreCall } from '../ast/QPreCall';
export class Loader {

  constructor(){
  }

  loadPreFunctions(state: State){
    state.set("print",function(line){console.log(line);});
    //var pfPrint = new("print",function(line){console.log(line);});
    //pfPrint.set(state);
    //Grammar
    //new QPreCall("print",value);
    //state.set("print",function(line){console.log(line);});
    return state;
  }

}
