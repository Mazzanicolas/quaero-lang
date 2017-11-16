import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de sumas.
*/
export class QPreDefFunction implements Exp {
  id:string;
  val:any[];

  constructor(id,val) {
    this.id = id;
    this.val = val;
  }

  toString(): string {
    //return `QFunction()`;
    return `QFunction(${this.id},(${this.val}))`;
  }

  unparse(): string {
    return `QFunction`;
  }

  evaluate(state: State) {
    state.set(this.id,[this.val]);
    return state;
  }
}
