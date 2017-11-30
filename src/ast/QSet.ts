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
    return `QSet()`;
  }

  unparse(): string {
    return `QSet()`;
  }

  push(element:any):any{
    this.elementList.push(element);
    return this;
  }

  evaluate(state: State) {// [a:2,"r":true]
    var qresult = new Set(qresult)//:any[]=[];
    var data:any[]=[];
    for(var i=0;i<this.elementList.length;i++){
      if(this.elementList[i].evaluate(state) instanceof Map){
        var elem = this.elementList[i].evaluate(state);
        var v = elem.get('v');
        qresult[elem.get('k')] = v;
        data.push(elem.get('k'));
        qresult.add(v);
      } else {
        qresult.add(this.elementList[i].evaluate(state));
      }
    }
    qresult['$reserved$'] = data.reverse();
    return qresult;
  }

}
