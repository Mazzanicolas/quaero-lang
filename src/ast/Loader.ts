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
    state.setFunction("boolean",function(value){var v = value.evaluate(state);if(Loader.isInList(v,[0,null,"\"\""])){return false;}else{return true;}});
    return state;
  }

  static isInList(value:any, array:any) {
    if(value instanceof Array && (value.length == 0) || value instanceof Object && Loader.isEmpty(value)){return true;}
    return array.indexOf(value) > -1;
  }

  static isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
}
