import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de los returns de una funcion.
*/
export class QFReturn implements Stmt {
  exp: Exp;

  constructor(exp: Exp) {
    this.exp = exp;
  }

  toString(): string {
    return `QFReturn(${this.exp.toString()})`;
  }

  unparse(): string {
    return `${this.exp.unparse()}`;
  }

  evaluate(state: State): State {
    state.set("return", this.exp.evaluate(state));
    return state;
  }
}
