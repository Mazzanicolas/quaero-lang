import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de sumas.
*/
export class QPreDefFunction implements Exp {
  id:string;
  val:any[];
  ret:any;

  constructor(id,val,ret) {
    this.id = id;
    this.val = val;
    this.ret = ret;
  }

  toString(): string {
    //return `QFunction()`;
    return `QFunction(${this.id},(${this.val}))`;
  }

  unparse(): string {
    return `QFunction`;
  }

  evaluate(state: State) {
    state.set(this.id,[this.val,this.ret]);
    return state;
  }
}
