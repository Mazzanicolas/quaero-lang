import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de sumas.
*/
export class QList implements Exp {

  elementList:Exp[];

  constructor(elementList) {
    this.elementList = elementList;
  }

  toString(): string {
    return `${Array.from(this.elementList.entries()).map(([key]) => (`${key}`))}`;
  }

  unparse(): string {
    return `QListo()`;
  }

  push(element:any):any{
    this.elementList.push(element);
    return this;
  }

  evaluate(state: State) {
    var qresult:any[]=[];
    var data:any[]=[];
    for(var i=0;i<this.elementList.length;i++){
      if(this.elementList[i].evaluate(state) instanceof Map){
        var elem = this.elementList[i].evaluate(state);
        var v = elem.get('v');
        qresult[elem.get('k')] = v;
        data.push(elem.get('k'));
        qresult.push(v);
      } else {
        qresult.push(this.elementList[i].evaluate(state));
      }
    }
    if(QList.hasDuplicates(data)){ console.log(" Elementos duplicados. Retornando: []");return []; }
    qresult = qresult.reverse()
    qresult['$reserved$'] = data.reverse();
    //console.log(qresult);
    return qresult;
  }

  static hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
  }
}
