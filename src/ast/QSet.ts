import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de sumas.
*/
export class QSet implements Exp {

  elementList:Exp[];

  constructor(elementList) {
    this.elementList = elementList;
  }

  toString(): string {
    return `QList()`;
  }

  unparse(): string {
    return `QListo()`;
  }

  push(element:any):any{
    this.elementList.push(element);
    return this;
  }

  evaluate(state: State) {// [a:2,"r":true]
    var qresult:any[]=[];
    for(var i=0;i<this.elementList.length;i++){
      qresult.push(this.elementList[i].evaluate(state));
    }
    return qresult.reverse();
  }
}
