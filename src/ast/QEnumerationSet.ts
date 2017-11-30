import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { Numeral } from './Numeral';

/**
  Representación de sumas.
*/
export class QEnumerationSet implements Exp {

  eleA:Exp;
  eleB:Exp;
  eleC:Exp;

  constructor(elementListA,elementListB,elementListC) {
    this.eleA = elementListA;
    this.eleB = elementListB;
    this.eleC = elementListC;
  }

  toString(): string {
    return `QEnumeration()`;
  }

  unparse(): string {
    return `QListo()`;
  }

  evaluate(state: State) {//Agregar listas decrecientes
    var inicio =  this.eleA.evaluate(state);
    var fin = this.eleC.evaluate(state);
    var inc = (this.eleB != null) ? this.eleB.evaluate(state) : 1;
    var qresult:any[]=[];
    if (inicio < fin){
      for(var i=inicio;i<=fin; i = i + inc){
        qresult.push(i);
      }
    } else {
      inc = (this.eleB != null) ? this.eleA.evaluate(state)-this.eleB.evaluate(state) : 1;
      for(var i=inicio;i>=fin; i = i - inc){
        qresult.push(i);
      }
    }
    return new Set(qresult);
  }


}
