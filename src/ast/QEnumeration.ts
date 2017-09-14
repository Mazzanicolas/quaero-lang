import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de sumas.
*/
export class QEnumeration implements Exp {

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
    return undefined;
  }
}
