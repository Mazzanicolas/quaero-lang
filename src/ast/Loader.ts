import { State } from '../interpreter/State';
import { QPreDefFunction } from '../ast/QPreDefFunction';
import { QPreCall } from '../ast/QPreCall';
export class Loader {

  constructor(){
  }

  loadPreFunctions(state: State){
    state.setFunction("print",function(line){console.log(line.evaluate(state));return;});
    return state;
  }

}
