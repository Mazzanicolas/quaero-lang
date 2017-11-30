import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QIn } from '../ast/QIn';

/**
  Representación de sumas.
*/
export class QCompSet implements Exp {
  exp:Exp;
  elementList:Exp[];

  constructor(exp,elementList) {
    this.exp         = exp;
    this.elementList = elementList.reverse();
  }

  toString(): string {
    return ``;
  }

  unparse(): string {
    return `QCompLst()`;
  }

  push(element:any):any{
    this.elementList.push(element);
    return this;
  }

  evaluate(state: State) {
    var stateClone = state.clone(state);
    var result = [];
    this.evaluatelo(stateClone,this.elementList,result);
    return new Set(result);
  }

  evaluatelo(state:State,elementList:Exp[],result:any[]){
    var head = elementList[0];
    if(elementList.length == 0){ return result.push(this.exp.evaluate(state)); }
    var tail = elementList.slice(1);
    if(head instanceof QIn){
      var id = head.value;
      var clonedState = new State();
      clonedState = state.clone(clonedState);
      var lst =[...head.collection.evaluate(clonedState)];
      for(var i=0;i<lst.length;i++){
        clonedState.set(id.id,lst[i]);
        this.evaluatelo(clonedState,tail,result);
      }
      //(head.collection.evaluate(state).forEach(function(element){ state.set(id,element); this.evaluatelo(state,tail,result); });
    } else if(typeof head.evaluate(state) === 'boolean'){
      if(head.evaluate(state)){
        this.evaluatelo(state,tail,result);
      }
    } else {
      console.log("Error");
    }
  }
}
