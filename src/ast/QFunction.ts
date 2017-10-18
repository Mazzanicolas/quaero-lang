import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de sumas.
*/
export class QFunction implements Exp {
  id:string;
  val:any[];
  stmt: [Stmt];
  ret:string;

  constructor(id,val,stmt,ret) {
    this.id = id;
    this.val = val;
    this.stmt = stmt;
    this.ret = ret;
  }

  toString(): string {
    //return `QFunction()`;
    return `QFunction(${this.id},(${this.val}),${this.stmt.toString()})`;
  }

  unparse(): string {
    return `QFunction`;
  }

  evaluate(state: State) {
    state.set(this.id,[this.val,this.stmt,this.ret]);
    return state;
  }
}
