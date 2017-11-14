import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { Numeral } from './Numeral';

/**
  Representación de sumas.
*/
export class QEnumeration implements Exp {

  eleA:Numeral;
  eleB:Numeral;
  eleC:Numeral;

  constructor(elementListA,elementListB,elementListC) {
    console.log("¿¿¿¿¿?????");
    console.log(elementListA);
    console.log(elementListB);
    console.log(elementListC);
    this.eleA = elementListA;
    this.eleB = elementListB;
    this.eleC = elementListC;
  }

  toString(): string {
    return `QList()`;
  }

  unparse(): string {
    return `QListo()`;
  }

  evaluate(state: State) {//Agregar listas decrecientes
    var inicio =  this.eleA.value;
    var fin = this.eleC.value;

    var incr = (this.eleB != null) ? this.eleB.value : 1;

    var qresult:any[]=[];
    for(var i=inicio;i<=fin; i = i + incr){
      qresult.push(i);
    }
    return qresult;
  }


}
