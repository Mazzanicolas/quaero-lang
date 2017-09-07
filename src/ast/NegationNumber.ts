import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de multiplicaciones.
*/
export class NegationNumber implements Exp {

  rhs: Exp;

  constructor(rhs: Exp) {
    this.rhs = rhs;
  }

  toString(): string {
    return `NegationNumber(${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(-${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return -this.rhs.evaluate(state);
  }
}
