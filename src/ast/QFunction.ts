import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de sumas.
*/
export class QFunction implements Exp {
  id:string;
  val:any[];
  stmt: [Stmt];

  constructor(id,val,stmt) {
    this.id = id;
    this.val = val;
    this.stmt = stmt;
  }

  toString(): string {
    //return `QFunction()`;
    return `QFunction(${this.id},(${this.val}),${this.stmt.toString()})`;
  }

  unparse(): string {
    return `QFunction`;
  }

  evaluate(state: State) {
    state.set(this.id,[this.val,this.stmt]);
    return state;
  }
}
