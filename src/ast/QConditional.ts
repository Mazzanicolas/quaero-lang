import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las sentencias condicionales.
*/
export class QConditional implements Stmt {
  cond: Exp;
  thenBody: Stmt;
  elseBody: Stmt;

  constructor(thenBody: Stmt,cond: Exp, elseBody: Stmt) {
    this.cond = cond;
    this.thenBody = thenBody;
    this.elseBody = elseBody;
  }

  toString(): string {
    return `QConditional(${this.cond.toString()}, ${this.thenBody.toString()}, ${this.elseBody.toString()})`;
  }

  unparse(): string {
    return `QConditional${this.cond.unparse()} then { ${this.thenBody.unparse()} } else { ${this.elseBody.unparse()} }`;
  }

  evaluate(state: State): State {
    if(this.cond.evaluate(state)){
      return this.thenBody.evaluate(state);
    }else{
      return this.elseBody.evaluate(state);
    }
  }
}
