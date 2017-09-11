import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de sumas.
*/
export class QFunction implements Exp {
  id:string;
  leo:any[]; //Esteregg
  stmt: [Stmt];

  constructor(id,val,stmt) {
    this.id = id;
    this.leo = val;
    this.stmt = stmt;
  }

  toString(): string {
    return `QFunction()`;
  }

  unparse(): string {
    return `QFunction`;
  }

  evaluate(state: State) {
    state.set(this.id,[this.leo,this.stmt]);
    return state;
  }
}
