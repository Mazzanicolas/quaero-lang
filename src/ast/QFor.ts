import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { QList } from './QList';
import { Assignment } from './Assignment';
import { Numeral } from './Numeral';
import { QEnumeration } from './QEnumeration';
import { QIn } from './QIn';
/**
  Representación de sumas.
*/
export class QFor implements Exp {

  elementList:Exp[];
  stmt:Stmt;

  constructor(lstExp,stmt) {
    this.elementList = lstExp.reverse();
    this.stmt = stmt;
  }

  toString(): string {
    return `QFor()`;
  }

  unparse(): string {
    return `QFor`;
  }

  evaluate(state: State) {
    this.evaluatelo(state,this.elementList);
    return state;
  }

  evaluatelo(state:State,elementList:Exp[]){
    var head = elementList[0];
    if(elementList.length == 0){ return this.stmt.evaluate(state); }
    var tail = elementList.slice(1);
    if(head instanceof QIn){
      var id = head.value;
      var lst =[...head.collection.evaluate(state)];
      for(var i=0;i<lst.length;i++){
        state.set(id.id,lst[i]);
        this.evaluatelo(state,tail);
      }
    } else if(typeof head.evaluate(state) === 'boolean'){
      if(head.evaluate(state)){
        this.evaluatelo(state,tail);
      }
    } else {
      console.log("Error");
    }
  }
}
