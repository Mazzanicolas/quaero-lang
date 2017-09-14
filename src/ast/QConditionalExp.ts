import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las sentencias condicionales.
*/
export class QConditionalExp implements Stmt {
  cond: Exp;
  iftrue: Exp;
  iffalse: Exp;

  constructor(cond: Exp,iftrue: Exp,iffalse: Exp) {
    this.cond = cond;
    this.iftrue = iftrue;
    this.iffalse = iffalse;
  }

  toString(): string {
    return ``;
  }

  unparse(): string {
    return ``;
  }

  evaluate(state: State): State {
    if(this.cond.evaluate(state)){
      state= this.iftrue.evaluate(state);
    }else{
      state= this.iffalse.evaluate(state);
    }
    return state;
  }
}
