import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de sumas.
*/
export class ExpAsStmt implements Exp {
  exp:Exp;
  constructor(exp) {
    this.exp  = exp;
  }

  toString(): string {
    //return `QFunction()`;
    return `QExpAsStmt(No tengo ganas de poner esto)`;
  }

  unparse(): string {
    return `QFunction`;
  }

  evaluate(state: State) {
    this.exp.evaluate(state);
    return state;
  }
}
