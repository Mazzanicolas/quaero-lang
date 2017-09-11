import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de sumas.
*/
export class QListComplete implements Exp {

  eleA:Exp[];
  eleB:Exp;

  constructor(elementListA,elementListB) {
    this.eleA = elementListA;
    this.eleB = elementListB;
  }

  toString(): string {
    return `QList()`;
  }

  unparse(): string {
    return `QListo()`;
  }


  evaluate(state: State) {//Agregar listas decrecientes
    let step=0;
    var result = [];
    let fin=this.eleB.evaluate(state);
    let start = this.eleA[0].evaluate(state);
    try {
      step = this.eleA[1].evaluate(state)-start;
      for(let i=start;i<=fin;i+=step){
        result.push(i);
      }
    }catch{
      for(let i=start;i<=fin;i++){
        result.push(i);
      }
    }
    return result;//immplement
  }
}
