import { State } from '../interpreter/State';
export class Loader {

  constructor(){
  }

  loadPreFunctions(state: State){
    state.setFunction("print",  function(line){console.log(line.evaluate(state));return;});
    state.setFunction("mod",    function(n1,n2){return n1.evaluate(state)%n2.evaluate(state);});
    state.setFunction("div",    function(n1,n2){return Math.trunc(n1.evaluate(state)/n2.evaluate(state));});
    state.setFunction("string", function(value){return value.evaluate(state).toString();});
    state.setFunction("int",    function(value){return parseInt(value.evaluate(state));});
    state.setFunction("number", function(value){return parseFloat(value.evaluate(state));});
    state.setFunction("boolean",function(value){var v = value.evaluate(state);if(Loader.isInList(v,[0,null])||(v instanceof Array && v.length==0)||(v instanceof String && v.length==0)){return false;}else{return true;}});
    return state; //posible porblema en boolean con "" porque .JSON elimina las ""
  }

  static isInList(value:any, array:any) {
    return array.indexOf(value) > -1;
  }
}
